const express = require('express')
const path = require('path')
const app = express()

app.listen(3030,()=>console.log('Servidor corriendo'))


app.use(express.static('public'));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./views/home.html'));
})