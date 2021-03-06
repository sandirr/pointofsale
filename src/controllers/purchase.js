const models = require("../models/purchase");
const helpers = require("../helpers");
const uniqid = require("uniqid")

module.exports = {
  buy: async (req, res) => {
    try {
      const buy = req.body;
      if (buy === undefined || buy === "") return console.log("Tidak ada data");

      var a = 0;
      const idBuyer = uniqid();
      console.log(req.body)
      await buy.products.map(e => {
        const data = {
          idBuyer: idBuyer,
          productId: e.productId,
          stock: e.quantity
        };
        const date = {
          date_added: new Date()
        };
        models.buy(data, a, date);
        a++;
      });

      helpers.response(res, 200, "thanks");
    } catch (error) {
      console.log(error);
      helpers.customErrorResponse(404, "your request not found");
    }
  },
  recap: async (req, res) => {
    try {
      const result = await models.recap();
      helpers.response(res, 200, result);
    } catch (error) {
      console.log(error);
      helpers.customErrorResponse(404, "your request not found");
    }
  },
  detailPurchase: async (req, res) => {
    try {
      const idBuyer = req.params.idBuyer;
      const result = await models.detailPurchase(idBuyer);
      helpers.response(res, 200, result);
    } catch (error) {
      console.log(error);
      helpers.customErrorResponse(404, "your request not found");
    }
  },
  lastWeek: async (req, res) => {
    try {
      const result = await models.lastWeekRecap();
      helpers.response(res, 200, result);
    } catch (error) {
      console.log(error);
      helpers.customErrorResponse(404, "your request not found");
    }
  }
};
