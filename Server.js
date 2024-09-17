import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

 app.post('/usuarios', async(req, res)=>
{
    await prisma.pessoa.create ( 
    {
        data:{
            nome:req.body.nome,
            idade:req.body.idade,
            email:req.body.email
        }
    }
)
res.status(201).json(req.body)    

})

//GET
//app.get('/usuarios',  (req, res) => {
  //  res.json(users)
   // res.send('ok, get')

//})

//inicia o server
app.listen(3000)

