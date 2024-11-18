import db from '../../db/db-config.js'
import bcrypt from 'bcryptjs'
import TokenService from './TokenService.js';

const tokenService = new TokenService()

class AuthService{
    async login(user, type){
        const result = await db(`SELECT * FROM ${type} WHERE email = $1`, [user.email])

        if (result.rows.length > 0) {
            const validUser = result.rows[0]

            const role = validUser.hasOwnProperty('permissao') ? validUser.permissao : 'user'
            const id = validUser.hasOwnProperty('cod_voluntario') ? validUser.cod_voluntario : validUser.cod_usuario

            console.log(role)
            console.log(id)

            if (await bcrypt.compare(user.password, validUser.senha))
                return {
                    authorized: true,
                    user: {
                        id: id,
                        name: validUser.nome,
                        phone: validUser.telefone,
                        birthDate: validUser.data_nascimento,
                        email: validUser.email,
                        role: role  
                    },
                    token: tokenService.generateToken({id, role})
                }

            throw new Error('Credenciais inválidas')
        }

        throw new Error('Usuário com este email não existe')
    }
}

export default AuthService