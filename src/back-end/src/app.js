import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import animalController from './controllers/Animal.js'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use('/animais', animalController)

app.get('/', (req, res) => {
    return res.end('Hello world!')
})

app.listen(3000, () => console.log('Rodando na porta 3000'))