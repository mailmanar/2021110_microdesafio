const express = require('express')
const path = require('path')
const app = express()

const publicPath = path.resolve(__dirname,'./public')
//console.log(publicPath)
app.listen(3030,()=>console.log('Servidor corriendo'))


app.use(express.static(publicPath));


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./views/home.html'));
})