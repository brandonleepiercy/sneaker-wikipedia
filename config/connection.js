var Sequelize = require("sequelize");


var sequelize = new Sequelize(process.env.database, "root", process.env.password, {
    host: process.env.host,
    port: process.env.port,
    dialect: process.env.user,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

module.exports = sequelize;



// FOR YOUR .ENV FILE:

// host = localhost
// username = root
// password = **YOURPASSWORD**
// database = sneakers
// port = 3306