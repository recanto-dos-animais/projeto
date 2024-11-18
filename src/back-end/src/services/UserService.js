import db from '../../db/db-config.js'
import bcrypt from 'bcryptjs'
import TokenService from './TokenService.js';

const tokenService = new TokenService()

class UserService{
    async addUser(user){
        const { userCode, name, birthDate, phone, email, password } = user;

        console.log(user)

        if (!userCode || !name || !birthDate || !phone || !email || !password) throw new Error("Todos os campos devem estar preenchidos");

        try {
            const result = await db('INSERT INTO usuarios (cod_usuario, nome, data_nascimento, telefone, email, senha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [userCode, name, birthDate, phone, email, await bcrypt.hash(password, 10)]);

            return {
                name: result.rows[0].nome,
                id: result.rows[0].cod_usuario
            } || null
        } catch (error) {
            if (error.message.includes('duplicar valor da chave viola a restrição de unicidade')) throw new Error('Usuário com este e-mail já existe')
            throw new Error(error.message)
        }
    }

    

    async getUserById(id){
        const res = await db('SELECT cod_usuario, nome, telefone, email, data_nascimento FROM usuarios WHERE cod_usuario = $1', [id])

        return res.rows[0] || null
    }

    async deleteUser(id){
        const res = await db('DELETE FROM usuarios WHERE cod_usuario = $1 RETURNING *', [id])

        if (res.rows.length > 0)
            return true

        throw new Error('Usuário com este id não encontrado')
    }

    async getAllUsers(token){
        const decodedToken = tokenService.validateToken(token)

        if (decodedToken.role !== 'admin') throw new Error('Permissão negada.')

        const res = await db('SELECT cod_usuario, email, nome, telefone FROM usuarios')

        return res.rows
    }

    async updateUser(id, data){
        console.log(data)
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
            UPDATE usuarios
            SET ${fields.join(', ')}
            WHERE cod_usuario = $${index}
            RETURNING *;
        `;
    
        values.push(id);
    
        const response = await db(query, values);
        return response.rows[0];
    }
}


export default UserService