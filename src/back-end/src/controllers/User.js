import express from 'express'
import db from '../../db/db-config.js'
import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt'
import UserService from '../services/UserService.js'

const userService = new UserService()

const router = express.Router()

router.post('/registrar', async (req, res) => {
    const data = req.body
    data.userCode = randomUUID()

    try {
        const newUser = await userService.addUser(data)

        return res.status(201).json({
            message: 'Usuário criado com sucesso',
            status: 201,
            user: newUser
        })
    } catch (error) {
        if (error.message === 'Todos os campos devem estar preenchidos')
            return res.status(400).json({error: error.message})

        if (error.message === 'Usuário com este e-mail já existe')
            return res.status(400).json({error: error.message})

        return res.status(500).json({error: 'Erro interno ao criar usuário'})
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const loginResponse = await userService.login({email, password})

        if (loginResponse.authorized)
            return res.status(200).json(loginResponse)
    } catch (error) {
        if (error.message === 'Credenciais inválidas') return res.status(401).json({error: error.message})
        if (error.message === 'Usuário com este email não existe') return res.status(401).json({error: error.message})
        return res.status(500).send(JSON.stringify({error: 'Erro interno ao processar login.'}))
    }
})

router.get('/:id', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

export default router   