import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const porta = 8000

app.use(bodyParser.json())

app.get("/hello", (req, res) =>{
    res.status(200).json({"Hello":"World"})
})

app.post("/user", (req, res) =>{

    const data = req.body

    console.log(data)
})

app.listen(porta, () =>[
    console.log(`Api rodando na porta ${porta}`)
])