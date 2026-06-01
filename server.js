const express = require('express')
const path = require('path')
const app = express()
const port = 3000 //Porta local

app.use(express.static(path.join(__dirname, 'PaginaInicial')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})