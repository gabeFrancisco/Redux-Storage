const PORT = 7000;
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

app.use(cors())
app.use(json())

const products = [
  {id: 7, name: 'Bible', category: 'Theological Books', quantity: 700, price: 12}
]

app.get("/products", (req,res) => {
  res.json(products)
})

app.listen(PORT, err => {
  if(err)
    console.log(`An error has occurred: ${err}`)
  else
    console.log(`App is listening on port ${PORT}`)
})