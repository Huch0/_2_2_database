// CREATE TABLE Labs (
//     id INT PRIMARY KEY,
//     name VARCHAR(50) NOT NULL,
//     description TEXT,
//     manager_id INT,
//     FOREIGN KEY (manager_id) REFERENCES Users(id)
//     FOREIGN KEY (school_id) REFERENCES Schools(id)
// );

const Sequelize = require("sequelize");

module.exports = class Lab extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        manager_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Lab",
        tableName: "Labs",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Lab.belongsTo(db.User, { foreignKey: "manager_id", targetKey: "id" });
    db.Lab.belongsTo(db.School, { foreignKey: "school_id", targetKey: "id" });
    db.Lab.hasMany(db.Profile, { foreignKey: "lab_id", sourceKey: "id" });
  }
};
