const express = require('express')
const app = express()
const port = 7000
//http://localhost:7000
app.get('/',function(req, res)  {
  res.send('Hello World!')
})

app.listen(port,function()  {
  console.log(`Example app listening on port ${port}`)
})