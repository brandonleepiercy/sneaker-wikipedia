const path = require("path");

module.exports = function (app) {

    //Deploys the landing page (../public/index.html) when the user loads into the default route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html")); 
    });

    //Displays the search page (../public/search.html) based on certain parameters, html dynamically modified by (../public/js/search.js)
    app.get("/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/search.html"));
    });

    //Displays the shoe and associated data on (../public/product.html), rendering handled by (../public/js/product.js)
    app.get("/shoe/:id", function(req, res) {
        var shoe = req.params.shoe;
        res.sendFile(path.join(__dirname, "../public/product.html"));
    });
};

