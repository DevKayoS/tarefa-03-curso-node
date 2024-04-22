// fazendo importações 
const express = require('express')
const path = require('path')
// configurando a porta
const port = 5000
// iniciando o express
const app = express()
// configurando o router
const router = require("./router/router")

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use("/router", router)

app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/template/index.html')
})

app.listen(port, ()=>{
  console.log("Server running in port: ", port)
})