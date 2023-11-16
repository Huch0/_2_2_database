// CREATE TABLE Contacts (
//   student_id INT,
//   lab_id INT,
//   portfolio_path VARCHAR(255),
//   date_contacted DATETIME DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (student_id, lab_id),
//   FOREIGN KEY (student_id) REFERENCES Users(id),
//   FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

const Sequelize = require("sequelize");

module.exports = class Contact extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        portfolio_path: {
          type: Sequelize.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Contact",
        tableName: "Contacts",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    this.belongsTo(db.User, {
      foreignKey: "student_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
    this.belongsTo(db.Lab, {
      foreignKey: "lab_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }
};
