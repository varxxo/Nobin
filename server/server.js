const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Nobin Server')
})

app.get('/dishes', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let fs = require('fs')
  let data = fs.readFileSync('./dishes.json', 'utf-8')
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})