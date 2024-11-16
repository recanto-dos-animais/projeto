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

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const user = await userService.getUserById(id)

        if (user !== null)
            return res.status(200).json(user)

        throw new Error('Usupario com este id não existe.')
    } catch (error) {
        
        if (error.message ==='Usupario com este id não existe.')
            return res.status(404).json({error: 'Usuario não encontrado'})

        return res.status(500).json({error: 'Erro interno ao carregar usuário'})
    }
})

export default router   