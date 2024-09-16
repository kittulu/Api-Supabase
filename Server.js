import express from 'express'

const app = express()

app.use(express.json())

const users =[]

/*
1) Tipo de rota(GET/PUT/patch/Post/Delete)
2) End.
*/

//POST
app.post('/usuarios', (req, res)=>
{
    //console.log(req.body)
    users.push(req.body)
    
    res.send('ok, post')
})

//GET
app.get('/usuarios',  (req, res) => {
    res.json(users)
    res.send('ok, get')

})

//inicia o server
app.listen(3000)

