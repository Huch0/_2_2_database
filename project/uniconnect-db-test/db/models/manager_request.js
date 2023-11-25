// CREATE TABLE Manger_requests (
//   id INT PRIMARY KEY,
//   user_id INT,
//   lab_id INT,
//   FOREIGN KEY (user_id) REFERENCES Users(id),
//   FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

import { Model, DataTypes } from "sequelize";
import connection from "../connection.js";

const init_manager_requests = (sequelize, Types) => {
  class Manager_request extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Lab, {
        foreignKey: "lab_id",
        targetKey: "id",
        onDelete: "CASCADE",
      });
    }
  }

  Manager_request.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      lab_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Labs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize, // Sequelize knows which instance to attach the model to.
      modelName: "Manager_request",
      tableName: "Manager_requests",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      // table will use the UTF-8 character set, and case-insensitive comparisons will be used when querying data.
    }
  );

  return Manager_request;
};

export default init_manager_requests(connection, DataTypes);