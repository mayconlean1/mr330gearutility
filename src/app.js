const express = require ('express');
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    return res.status(400).send('ok')
})

module.exports = app