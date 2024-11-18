import db from '../../db/db-config.js'
import bcrypt from 'bcryptjs'
import TokenService from './TokenService.js';

const tokenService = new TokenService()

class VolunteerService{
    
    async addVolunteer(volunteer){
        console.log(volunteer)
        const { volunteerCode, name, phone, address, birthDate, registerDate, email, password, role } = volunteer

        if (!volunteerCode || !name || !phone || !address || !birthDate || !registerDate || !email || !password || !role) throw new Error("Todos os campos devem estar preenchidos")

        try {
            const result = await db('INSERT INTO voluntarios (cod_voluntario, nome, telefone, endereco, data_nascimento, data_cadastro, email, senha, permissao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [volunteerCode, name, phone, address, birthDate, registerDate, email, await bcrypt.hash(password, 10), role])

            console.log(result.rows)

            return {
                name: result.rows[0].nome,
                id: result.rows[0].cod_voluntario
            }
        } catch (error) {
            console.log(error.message)
            if (error.message.includes('duplicar valor da chave viola a restrição de unicidade')) throw new Error('Voluntário com este e-mail já existe')
            throw new Error(error.message)
        }
    }

    async getAllVolunteers(token){
        const decodedToken = tokenService.validateToken(token)

        if (decodedToken.role !== 'admin') throw new Error('Permissão negada.')

        console.log(decodedToken)

        const res = await db('SELECT cod_voluntario, email, nome, telefone, permissao FROM voluntarios')

        return res.rows
    }

    async deleteVolunteer(token, id){
        const decodedToken = tokenService.validateToken(token)

        if (decodedToken.id !== id || decodedToken.role !== 'admin') throw new Error('Permissão negada.')

        const res = await db('DELETE FROM voluntarios WHERE cod_voluntario = $1', [id])

        if (res.rows.length > 0)
            return true

        throw new Error('Voluntário com este id não encontrado')
    }

    async getVolunteerById(id){
        const response = await db('SELECT cod_voluntario, nome, telefone, email, data_nascimento, data_cadastro, permissao FROM voluntarios WHERE id = $1', [id])

        return response.rows[0]
    }

    async updateVolunteer(id, data){
        if (!data.email && !data.password) {
            throw new Error('Nenhum dado enviado. Nada foi editado.');
        }
    
        const fields = [];
        const values = [];
        let index = 1;
    
        if (data.email) {
            fields.push(`email = $${index++}`);
            values.push(data.email);
        }
        if (data.password) {
            const hashedPassword = await bcrypt.hash(data.password);
            fields.push(`password = $${index++}`);
            values.push(hashedPassword);
        }
    
        const query = `
            UPDATE voluntarios
            SET ${fields.join(', ')}
            WHERE cod_voluntario = $${index}
            RETURNING *;
        `;
    
        values.push(id);
    
        const response = await db(query, values);
        return response.rows[0];
    }

    
}

export default VolunteerService