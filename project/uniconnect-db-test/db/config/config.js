require('dotenv').config();

module.exports = {
  development: {
    username: 'uniconnect_admin',
    password: "1324",
    database: 'uniconnect_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: "admin",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "db_test",
    host: process.env.SEQUELIZE_HOST,
    dialect: "postgres",
  },
  production: {
    username: 'admin',
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE_NAME,
    host: process.env.SEQUELIZE_HOST,
    dialect: 'postgres',
    logging: false,
  },
};