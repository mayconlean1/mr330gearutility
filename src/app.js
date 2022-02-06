const express = require ('express');
const app = express();
const path = require('path')

const initGearsApp = require('../public/GearsApp/initGearApp')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))
app.use( express.static( 'public' ))

app.use(express.json())

app.get('/',(req,res)=>{
    return res.status(200).render('index')
})


module.exports = app