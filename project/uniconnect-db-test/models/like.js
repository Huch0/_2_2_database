// CREATE TABLE Likes (
//   post_id INT,
//   user_id INT,
//   date_liked DATETIME DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (post_id, user_id),
//   FOREIGN KEY (post_id) REFERENCES Posts(id),
//   FOREIGN KEY (user_id) REFERENCES Users(id)
// );

const Sequelize = require("sequelize");

export default class Like extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      },
      {
        sequelize,
        modelName: "Like",
        tableName: "Likes",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    this.belongsTo(db.Post, {
      foreignKey: "post_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
    this.belongsTo(db.User, {
      foreignKey: "user_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }
}
