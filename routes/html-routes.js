const path = require("path");

module.exports = function (app) {

    //Deploys the landing page when the user loads into the default route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "WRITE THE PATH TO THE INDEX HTML FILE HERE")); 
    });

    //Indexes all of the sneakers stored in the database
    app.get("/browse", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/sneakers.html"));
    });

    //Displays the search page and the results based on the searched value (passed through the request and stored in 'searchTerm')
    app.get("/search?=:term", function(req, res) {
        var searchTerm = req.params.term;
    });

    //Displays the shoe and the associated data on a page based on the url parameter stored in 'shoe'
    app.get("/shoe/:shoe", function(req, res) {
        var shoe = req.params.shoe;

    });
};