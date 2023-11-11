const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// Test the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Create a db object to export and initialize models
const db = {
  Sequelize,
  sequelize,
  User: require("./User")(sequelize, Sequelize),
  Profile: require("./profile")(sequelize, Sequelize),
  School: require("./school")(sequelize, Sequelize),
  Major: require("./major")(sequelize, Sequelize),
  Lab: require("./lab")(sequelize, Sequelize),
};

// Create associations between models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
