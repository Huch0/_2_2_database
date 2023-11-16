// CREATE TABLE Subscriptions (
//   user_id INT,
//   lab_id INT,
//   date_subscribed DATETIME DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (user_id, lab_id),
//   FOREIGN KEY (user_id) REFERENCES Users(id),
//   FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

const Sequelize = require("sequelize");

module.exports = class Subscription extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        sequelize,
        modelName: "Subscription",
        tableName: "Subscriptions",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    this.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
    this.belongsTo(db.Lab, {
      foreignKey: "lab_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }

}