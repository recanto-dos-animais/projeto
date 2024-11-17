import db from '../../db/db-config.js'
import bcrypt from 'bcrypt'
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
            } || null;
        } catch (error) {
            console.log(error.message)
            if (error.message.includes('duplicar valor da chave viola a restrição de unicidade')) throw new Error('Usuário com este e-mail já existe')
            throw new Error(error.message)
        }
    }

    async login(user){
        const result = await db('SELECT * FROM usuarios WHERE email = $1', [user.email])

        if (result.rows.length > 0) {
            const validUser = result.rows[0]

            if (await bcrypt.compare(user.password, validUser.senha))
                return {
                    authorized: true,
                    user: {
                        id: validUser.cod_usuario,
                        name: validUser.nome,
                        phone: validUser.telefone,
                        birthDate: validUser.data_nascimento,
                        email: validUser.email  
                    },
                    token: tokenService.generateToken({cod_usuario: validUser.cod_usuario, role: 'user'})
                }

            throw new Error('Credenciais inválidas')
        }

        throw new Error('Usuário com este email não existe')
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

        console.log(decodedToken)

        if (decodedToken.role === 'admin') throw new Error('Permissão negada.')

        const res = await db('SELECT cod_usuario, email, nome, telefone FROM usuarios')

        return res.rows
    }
}


export default UserService