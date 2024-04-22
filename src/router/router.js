// fazendo importações 
const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../template')

router.use(express.static('public'))

router.post("/add", (req, res)=>{
  console.log(req.body)
  res.sendFile(`${basePath}/congratulations.html`)
})

module.exports = router