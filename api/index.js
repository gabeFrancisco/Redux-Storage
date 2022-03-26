const PORT = 7000;
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

//Database
const db = require("./database/database");
const Products = require("./database/models/products");
const Categories = require("./database/models/categories");
const Customers = require("./database/models/customers");

db.authenticate()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("An error has occurred: " + err);
  });

app.use(cors());
app.use(json());

//===========================//PRODUCTS//========================================

app.get("/products", async (req, res) => {
  await Products.findAll({ raw: true }).then((products) => {
    return res.json(products);
  });
});

app.post("/products", async (req, res) => {
  await Products.create({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
  }).catch((err) => res.json("\nAn error has occurred: " + err));

  res.sendStatus(200);
});

//===========================//CATEGORIES//=======================================

app.get("/categories", async (req, res) => {
  await Categories.findAll({ raw: true }).then((categories) => {
    return res.json(categories);
  });
});

app.post("/categories", async (req, res) => {
  await Categories.create({
    name: req.body.name,
    color: req.body.color,
  }).catch((err) => res.json("\nAn error has occurred: " + err));

  res.sendStatus(200);
});

//=========================//CUSTOMERS//==========================================

app.get("/customers", async (req, res) => {
  await Customers.findAll({raw: true}).then((customers) => {
    return res.json(customers);
  })
})

app.get("/customers/:id", async (req, res) => {
  await Customers.findByPk(req.params.id).then(result => res.json(result))
})

app.listen(PORT, (err) => {
  if (err) console.log(`An error has occurred: ${err}`);
  else console.log(`App is listening on port ${PORT}`);
});
