require('dotenv').config();
const environment={
  "development": {
    "username": process.env.DATABASE_USERNAME_DEVELOPMENT,
    "password": process.env.DATABASE_PASSWORD_DEVELOPMENT,
    "database": process.env.DATABASE_NAME_DEVELOPMENT,
    "host": process.env.DATABASE_HOST_DEVELOPMENT,
    "dialect": process.env.DATABASE_DIALECT_DEVELOPMENT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports =environment