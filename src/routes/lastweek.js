const express = require("express");
const Route = express.Router();

const { authentication, authorization } = require('../helpers/auth')
const {
  lastWeek
} = require("../controllers/purchase");

Route
  .get("/", authentication, authorization, lastWeek)

module.exports = Route;
