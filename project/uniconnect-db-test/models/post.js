// CREATE TABLE Posts (
//   id INT PRIMARY KEY,
//   author_id INT,
//   lab_id INT,
//   content TEXT,
//   date_posted DATETIME DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (author_id) REFERENCES Users(id),
//   FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
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
        modelName: "Post",
        tableName: "Posts",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    this.belongsTo(db.User, {
      foreignKey: "author_id",
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
