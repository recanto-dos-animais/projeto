import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const JWTSECRET = process.env.JWT_SECRET

class TokenService{

    generateToken(user){
        const token = jwt.sign(
            {id: user.cod_usuario, role: user.role},
            JWTSECRET,
            {expiresIn: '72h'}
        )

        return token
    }
}

export default TokenService