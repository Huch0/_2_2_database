import Sequelize from "sequelize";
import pg from "pg";
import env from "dotenv";
import config from "./config/config.js";

const envConfig = config[process.env.NODE_ENV || "development"];

const dbConfig = {
  username: envConfig.username,
  password: envConfig.password,
  database: envConfig.database,
  host: envConfig.host,
  dialect: envConfig.dialect,
  dialectModule: pg,
  logging: false,
};

const sequelize = new Sequelize(
  dbConfig,
);

const connection = sequelize;

export default connection;
