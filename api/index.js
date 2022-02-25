const PORT = 7000;
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

//Database 
const db = require('./database/database')
const Products = require('./database/models/products')
 
db.authenticate()
  .then(() => {
    console.log("Database connected successfully!")
  })
  .catch((err) => {
    console.log("An error has occurred: " + err)
  })

app.use(cors())
app.use(json())

app.get("/products", (req,res) => {
  Products.findAll({raw: true}).then(products => {
    res.json(products)
  })
})

app.post("/products", (req, res) => {
  Products.create({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price
  }).then(
    console.log("\nProduct inserted into DB!")
  )
  .catch((err) => console.log("\nAn error has occurred: " + err))
})

app.listen(PORT, err => {
  if(err)
    console.log(`An error has occurred: ${err}`)
  else
    console.log(`App is listening on port ${PORT}`)
})