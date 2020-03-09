const express = require("express");
const Route = express.Router();
const {
  lastWeek
} = require("../controllers/purchase");

Route
  .get("/", lastWeek)

module.exports = Route;
