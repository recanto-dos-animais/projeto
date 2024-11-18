import express from 'express'
import { randomUUID } from 'node:crypto'
import TokenService from '../services/TokenService.js'
import VolunteerService from '../services/VolunteerService.js'
import AuthService from '../services/AuthService.js'

const volunteerService = new VolunteerService()
const tokenService = new TokenService()
const authService = new AuthService()

const router = express.Router()

router.post('/registrar', async (req, res) => {   
    const data = req.body
    data.volunteerCode = randomUUID()

    try {
        const newVolunteer = await volunteerService.addVolunteer(data)

        return res.status(201).json(newVolunteer)
    } catch (error) {
        if (error.message === 'Todos os campos devem estar preenchidos' || error.message === 'Voluntário com este e-mail já existe')
            return res.status(400).json({error: error.message})

        return res.status(500).json({error: 'Erro interno ao criar voluntário'})
    }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const loginResponse = await authService.login({email, password}, 'voluntarios')

        if (loginResponse.authorized)
            return res.status(200).json(loginResponse)
    } catch (error) {
        console.log(error.message)
        if (error.message === 'Credenciais inválidas' || error.message === 'Usuário com este email não existe') return res.status(401).json({error: error.message})

        return res.status(500).send(JSON.stringify({error: 'Erro interno ao processar login.'}))
    }
})

router.get('/', async (req, res) => {
    const token = tokenService.recoverToken(req)

    if (!token) return res.status(401).json({error: 'Token não fornecido.'})

        try {
            const allVolunteers = await volunteerService.getAllVolunteers(token)
            return res.status(200).json(allVolunteers)
        } catch (error) {
            if (error.message === 'Permissão negada.') return res.status(403).json({error: error.message})
        }
})

router.delete('/:id', async (req, res) => {
    const token = tokenService.recoverToken(req)
    const {id} = req.params

    if (!token) return res.status(401).json({error: 'Token não fornecido.'})
    
    try {
        const deleteResponse = await volunteerService.deleteVolunteer(token, id)
        if (deleteResponse) return res.status(204).json({ok: true, message: 'Usuário deletado com sucesso'})
    } catch (error) {
        if (error.message === 'Permissão negada.') return res.status(403).json({error: error.message})
        if (error.message === 'Voluntário com este id não encontrado') return res.status(404).json({error: 'Voluntário não encontrado'})
        return res.status(500).json({error: 'Erro interno ao deletar usuário'})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const volunteer = await volunteerService.getVolunteerById(id)

        if (volunteer !== null)
            return res.status(200).json(volunteer)

        throw new Error('Voluntário com este id não existe.')
    } catch (error) {
        
        if (error.message ==='Voluntário com este id não existe.')
            return res.status(404).json({error: 'Voluntário não encontrado'})

        return res.status(500).json({error: 'Erro interno ao carregar voluntário'})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params

    const {email, password} = req.body

    try {
        const updatedVolunteer = await volunteerService.updateVolunteer(id, {email, password})
        return res.status(200).json(updatedVolunteer)
    } catch (error) {
        return res.status(400).json({error: 'Nenhum campo para edição foi enviado.'})
    }
})


export default router