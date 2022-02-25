const PORT = 7000;
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

app.use(cors())
app.use(json())

const products = [
  {id: 7, name: 'Bible', category: 'Theological Books', quantity: 700, price: 12},
  {id: 8, name: 'Notebook', category: 'Computers', quantity: 17, price: 2800},
  {id: 12, name: 'Hoodie', category: 'Clothes', quantity: 42, price: 89},
]

app.get("/products", (req,res) => {
  res.json(products)
})

app.post("/products", (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price
  }

  products.push(product)
  res.json("Product added!")
})

app.listen(PORT, err => {
  if(err)
    console.log(`An error has occurred: ${err}`)
  else
    console.log(`App is listening on port ${PORT}`)
})