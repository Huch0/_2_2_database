/*
CREATE TABLE Users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    role ENUM('reader', 'student', 'researcher', 'lab_manager', 'admin', ‘banned’) NOT NULL
);
*/
const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        username: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        role: {
          type: Sequelize.ENUM(
            "reader",
            "student",
            "researcher",
            "lab_manager",
            "admin",
            "banned"
          ),
          allowNull: false,
        },
      },
      {
        sequelize, // Sequelize knows which instance to attach the model to.
        modelName: "User",
        tableName: "Users",
        paranoid: true, // Sequelize would only mark the record as deleted (by setting a deletedAt timestamp), but not actually delete it.
        charset: "utf8",
        collate: "utf8_general_ci",
        // table will use the UTF-8 character set, and case-insensitive comparisons will be used when querying data.
      }
    );
  }
  static associate(db) {
    this.hasOne(db.Profile, {
      foreignKey: "user_id",
      sourceKey: "id",
      onDelete: "CASCADE",
    });
  }
};
