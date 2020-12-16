
// dependencies
const db = require("../models");
const { Op } = require("sequelize");

// routes
module.exports = function(app) {
    // Find all shoes and return them to the user with res.json
    app.get("/api/shoes", function(req, res) {
      db.Shoe.findAll({}).then(function(dbShoe) {
        res.json(dbShoe);
      });
    });

    // finding all shoes belonging to a specific category
    app.get("/api/shoes/name/:name?/brand/:brand?/release_date/:release_date?/collaborators/:collaborators?/color/:color?/sizing_type/:sizing_type?/sizing_gender/:sizing_gender?/min_size/:min_size?/max_size/:max_size?/price_min/:price_min?/price_max/:price_max?/description/:description?/style/:style?/product_link/:product_link?", function(req, res) {
        let whereProps = {};

        if (req.params.name) {
            whereProps.name = req.params.name
        }

        if (req.params.brand) {
            whereProps.brand = req.params.brand
        }

        if (req.params.release_date) {
            whereProps.release_date = req.params.release_date
        }

        if (req.params.collaborators) {
            whereProps.collaborators = req.params.collaborators
        }

        if (req.params.color) {
            whereProps.color = req.params.color
        }

        if (req.params.sizing_type) {
            whereProps.sizing_type = req.params.sizing_type
        }

        if (req.params.sizing_gender) {
            whereProps.sizing_gender = req.params.sizing_gender
        }

        if (req.params.min_size) {
            whereProps.min_size = req.params.min_size
        }

        if (req.params.max_size) {
            whereProps.max_size = req.params.max_size
        }

        if (req.params.price_min) {
            whereProps.price_min = {
                [Op.gte]: req.params.price_min
            }
        }

        if (req.params.price_max && price_max <= req.params.price_max) {
            whereProps.price_max = {
                [Op.lte]: req.params.price_max
            }
        }

        if (req.params.description) {
            whereProps.description = req.params.description
        }

        if (req.params.style) {
            whereProps.style = req.params.style
        }

        if (req.params.product_link) {
            whereProps.product_link = req.params.product_link
        }

        
        db.Shoe.findAll({
            where: whereProps
        }).then(function(dbShoe) {
            res.json(dbShoe);
        });
    });

    // FINDING ONE SHOE THAT MATCHES PARAMS
    // finding one shoe with a specific id
    app.get("/api/shoes/:id", function(req, res) {
        db.Shoe.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbShoe) {
            res.json(dbShoe);
        });
    });
  
};


// // FINDING SHOES IN SPECIFIC CATEGORIES
// // Finding all shoes with a specific name
// app.get("/api/shoes/name/:name", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             name: req.params.name
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific brand
// app.get("/api/shoes/brand/:brand", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             brand: req.params.brand
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific release date
// app.get("api/shoes/release_date/:release_date", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             release_date: req.params.release_date
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with specific collaborators
// app.get("/api/shoes/collaborators/:collaborators", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             collaborators: req.params.collaborators
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific color
// app.get("/api/shoes/color/:color", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             color: req.params.color
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific sizing_type
// app.get("/api/shoes/sizing_type/:sizing_type", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             sizing_type: req.params.sizing_type
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific sizing_gender
// app.get("/api/shoes/sizing_gender/:sizing_gender", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             sizing_gender: req.params.sizing_gender
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific min_size
// app.get("/api/shoes/min_size/:min_size", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             min_size: req.params.min_size
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific max_size
// app.get("/api/shoes/max_size/:max_size", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             max_size: req.params.max_size
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific price range
// app.get("/api/shoes/price_range/:price_min/:price_max", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             price_min: {
//                 [Op.gte]: req.params.price_min
//             },
//             price_max: {
//                 [Op.lte]: req.params.price_max
//             }
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific description
// app.get("/api/shoes/description/:description", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             description: req.params.description
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific style
// app.get("/api/shoes/style/:style", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             style: req.params.style
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });

// // finding all shoes with a specific product_link
// app.get("/api/shoes/product_link/:product_link", function(req, res) {
//     db.Shoe.findAll({
//         where: {
//             product_link: req.params.product_link
//         }
//     }).then(function(dbShoe) {
//         res.json(dbShoe);
//     });
// });