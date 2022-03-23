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

app.get("/products", async (req,res) => {
  await Products.findAll({raw: true}).then(products => {
    return res.json(products)
  })
})

app.post("/products", async (req, res) => {
  await Products.create({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price
})
  .catch((err) => res.json("\nAn error has occurred: " + err))
  
  res.sendStatus(200);
})

app.listen(PORT, err => {
  if(err)
    console.log(`An error has occurred: ${err}`)
  else
    console.log(`App is listening on port ${PORT}`)
})
