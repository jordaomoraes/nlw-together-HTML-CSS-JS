const express = require('express')
const routes = require("./routes")
const path =require('path')

const server = express()

server.set('view engine' , 'ejs')

//aqui diz que é pra usar o que está na pasta public
server.use(express.static("public"))

//junta todo o caminho até a pasta do projeto, o dir name no caso aqui é o src/ que é a pasta que to executando o comando
server.set('views',path.join(__dirname,'views'))


server.use(routes)
server.listen(3000, () => console.log("Server Rodando"))
