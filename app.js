const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.resolve(__dirname,'public')
//console.log(publicPath)
app.listen(3030,()=>console.log('Servidor corriendo'))


app.use(express.static(publicPath));

console.log(path.join(__dirname,'views/cuenta.html'))

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'views/home.html'));
})

app.get('/cuenta',function(req,res){
    res.sendFile(path.join(__dirname,'views/cuenta.html'));
})