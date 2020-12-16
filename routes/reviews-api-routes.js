// dependencies
const db = require("../models");
const { Op } = require("sequelize");

// routes
module.exports = function(app) {
    // Find all reviews and return them to the user with res.json
    app.get("/api/reviews", function(req, res) {
      db.Review.findAll({}).then(function(dbReview) {
        res.json(dbReview);
      });
    });
}