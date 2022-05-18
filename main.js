const express = require('express')
const app = express()
const port = 8095

app.get('/', (req, res) => {
  res.send('Node.JS + Apache!')
})

app.listen(port, () => {
})
