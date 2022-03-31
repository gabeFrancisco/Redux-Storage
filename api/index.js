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
const Notifications = require("./database/models/notifications");

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

app.put("/products", async (req, res) => {
  await Products.update({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
  }, { where: {id: req.body.id}})

  res.sendStatus(200)
})

app.delete("/products/:id", async (req, res) => {
  await Products.destroy({
    where: { id: req.params.id },
  });
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
  await Customers.findAll({ raw: true }).then((customers) => {
    return res.json(customers);
  });
});

app.get("/customers/:id", async (req, res) => {
  await Customers.findByPk(req.params.id).then((result) => res.json(result));
});

app.post("/customers", async (req, res) => {
  await Customers.create({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    country: req.body.country,
    postalCode: req.body.postalCode,
  }).catch((err) => res.sendStatus(500));

  res.sendStatus(200);
});

//=========================//NOTIFICATIONS========================================
app.get("/notifications", async (req, res) => {
  await Notifications.findAll({ raw: true }).then((notifications) =>
    res.json(notifications)
  );
});

app.post("/notifications", async (req, res) => {
  await Notifications.create({
    title: req.body.title,
    message: req.body.message,
    color: req.body.color,
  }).catch((err) => res.sendStatus(500));

  res.sendStatus(200);
});

app.listen(PORT, (err) => {
  if (err) console.log(`An error has occurred: ${err}`);
  else console.log(`App is listening on port ${PORT}`);
});
