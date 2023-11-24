// CREATE TABLE Users (
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     user_name VARCHAR(20) NOT NULL,
//     email VARCHAR(50) NOT NULL UNIQUE,
//     password VARCHAR(50) NOT NULL,
//     role ENUM('reader', 'student', 'researcher', 'lab_manager', 'admin', 'banned') NOT NULL,
//     createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     updatedAt DATETIME NOT NULL,
//     deletedAt DATETIME
// );

import { Model, DataTypes } from "sequelize";
import connection from "../connection.js";

const init_users = (sequelize, Types) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Post, {
        foreignKey: "author_id",
        sourceKey: "id",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Subscription, {
        foreignKey: "user_id",
        sourceKey: "id",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      user_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM(
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

  return User;
};

export default init_users(connection, DataTypes);