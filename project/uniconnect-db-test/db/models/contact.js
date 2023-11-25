// CREATE TABLE Contacts (
//   student_id INT,
//   lab_id INT,
//   portfolio_path VARCHAR(255),
//   status ENUM('pending', 'accepted', 'rejected'),
//   PRIMARY KEY (student_id, lab_id),
//   FOREIGN KEY (student_id) REFERENCES Users(id),
//   FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

import { Model, DataTypes, ENUM } from "sequelize";
import connection from "../connection.js";

const init_contacts = (sequelize, Types) => {
  class Contact extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "student_id",
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
  Contact.init(
    {
      student_id: {
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
      portfolio_path: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: ENUM("pending", "accepted", "rejected"),
        allowNull: false,
        defaultValue: "pending",
      }
    },
    {
      sequelize, // Sequelize knows which instance to attach the model to.
      modelName: "Contact",
      tableName: "Contacts",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
      // table will use the UTF-8 character set, and case-insensitive comparisons will be used when querying data.
    }
  );

  return Contact;
};

export default init_contacts(connection, DataTypes);