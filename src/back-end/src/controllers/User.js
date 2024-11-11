import express from 'express'
import db from '../../db/db-config.js'
import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/registrar', async (req, res) => {
    const {name, email, password} = req.body

    try {
        const hashedPass = await bcrypt.hash(password, 10)

        const result = await db(`INSERT INTO usuarios (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING id, nome, email`, [randomUUID(), name, email, hashedPass])
        console.log(result)
        return res.send(JSON.stringify(result.rows))
    } catch (error) {
        console.error(error)
    }
})

export default router   