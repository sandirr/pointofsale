const express = require("express");
const Route = express.Router();

const { authentication, authorization } = require('../helpers/auth')
const {
  buy,
  recap,
  detailPurchase
} = require("../controllers/purchase");

Route
  .post("/", authentication, authorization, buy)
  .get("/", authentication, authorization, recap)
  .get("/:idBuyer", authentication, authorization, detailPurchase)

module.exports = Route;
