// dependencies
const db = require("../models");
const { Op } = require("sequelize");
const shoesApiRoutes = require("./shoes-api-routes");

// routes
module.exports = function(app) {
  // Find all reviews and return them to the user with res.json
  app.get("/api/reviews/:name", function(req, res) {
    db.Shoes.findAll({
      where: {
        name: req.params.name
      },
      include: [db.Review]
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // posting a new review
  app.post("/api/reviews", function(req, res) {
    db.Review.create(req.body).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // deleting a review
  app.delete("/api/reviews/:id", function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
  });

  // updating a review
  app.put("/api/reviews", function(req, res) {
    db.Review.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbReview) {
      res.json(dbReview);
    });
  });
}