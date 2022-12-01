const express = require("express");
const router = express.Router();
const foods = require("../../models/foodModel");

//mongo get all
router.get("/", (req, res) => {
  foods.find().then((foundfood) => res.json(foundfood));
});

//mongo get by name
router.get("/:name", (req, res) => {
  const temp2 = "name";

  foods
    .find({ temp2: req.params.name })
    .then((foundfood) =>
      res.json(foundfood.filter((result) => result.name === req.params.name))
    );
});

//mongo get by id
router.get("/id/:id", (req, res) => {
  const temp3 = "id";

  foods
    .find({ temp3: req.params.id })
    .then((foundfood3) =>
      res.json(
        foundfood3.filter((result) => result.id === parseInt(req.params.id))
      )
    );
});

//mongo get by price
router.get("/price/:price", (req, res) => {
  const temp1 = "price";

  foods
    .find({ temp1: req.params.price })
    .then((foundfood1) =>
      res.json(
        foundfood1.filter(
          (result) => result.price === parseInt(req.params.price)
        )
      )
    );
});

//mongo post to server
router.post("/", (req, res) => {
  const id = foods.length + 1;
  const name = req.body.name;
  const price = req.body.price;
  const image =
    "https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=800";
  const newFood = new foods({
    id,
    name,
    price,
    image,
  });
  newFood.save();
});

module.exports = router;
