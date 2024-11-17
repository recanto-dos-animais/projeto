import express from 'express'
import { randomUUID } from 'node:crypto'
import TokenService from '../services/TokenService'

const tokenService = new TokenService()

const router = express.Router()

router.post('/registrar', (req, res) => {

})


export default router