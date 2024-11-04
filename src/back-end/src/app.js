import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        name: 'Samuel',
        idade: 24
    }))
})

app.listen(3000, () => console.log('Rodando na porta 3000'))