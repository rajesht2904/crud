const express = require('express')
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});