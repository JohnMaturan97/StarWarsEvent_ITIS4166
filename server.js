const express = require('express')
const app = express()
const dbConnection = require('./db')
const port = 8000

app.use('/api/ships/' , require('./routes/shipsRoute'))

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!!!'))

app.listen(port, () => console.log(`**** Server Connected : ${port} ****`))