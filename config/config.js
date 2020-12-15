module.exports = {
  "development": {
    "username": "root",
    "password": process.env.password,
    "database": process.env.database,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.password,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.password,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

