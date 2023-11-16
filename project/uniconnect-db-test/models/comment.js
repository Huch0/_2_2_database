// CREATE TABLE Comments (
//   id INT PRIMARY KEY,
//   post_id INT,
//   author_id INT,
//   content TEXT,
//   date_posted DATETIME DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (post_id) REFERENCES Posts(id),
//   FOREIGN KEY (author_id) REFERENCES Users(id)
// );

const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        date_posted: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "Comments",
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
      foreignKey: "author_id",
      targetKey: "id",
      onDelete: "CASCADE",
    });
  }
};
