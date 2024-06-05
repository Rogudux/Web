const express = require('express')
const app = express()
const port = 81
var cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/ productos.js"))



app.listen(port, () => {
  console.log(`En puerto ${port}`)
})
