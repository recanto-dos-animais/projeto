import express from 'express'
import db from '../../db/db-config.js'
import { randomUUID } from 'node:crypto'
import InvalidLogin from '../../errors/InvalidLogin.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/registrar', async (req, res) => {
    const {name, email, password} = req.body

    try {
        const result = await db(`INSERT INTO usuarios (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING id, nome, email`, [randomUUID(), name, email, await bcrypt.hash(password, 10)])

        return res.send(JSON.stringify(result.rows))
    } catch (error) {
        console.error(error)
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try{
        const result = await db('SELECT (email, senha) FROM usuarios WHERE email = $1', [email])

        if (result.rows.length > 0) {
            const user = result.rows[0]

            if (await bcrypt.compare(password, user.senha)) 
                return res.status(200).json({
                    authorized: true
                })

            return res.status(401).json({error: 'Senha inválida'})
        }

        return res.status(401).json({error: 'Usuário com este email não existe'})
    }
    catch(error){
        return res.status(500).send(JSON.stringify({error: 'Erro interno ao processar login.'}))
    }
})

export default router   