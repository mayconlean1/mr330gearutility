const express = require ('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))
app.use( express.static( 'public' ))

app.use(express.json())

app.get('/',(req,res)=>{
    return res.status(400).render('index')
})

module.exports = app