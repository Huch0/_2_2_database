// CREATE TABEL Schools (
//     id INT PRIMARY KEY,
//     school_name VARCHAR(50) NOT NULL,
//     )

const Sequelize = require("sequelize");

module.exports = class School extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        school_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "School",
        tableName: "Schools",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.School.hasMany(db.Major, { foreignKey: "school_id", sourceKey: "id" });
    db.School.hasMany(db.Lab, { foreignKey: "school_id", sourceKey: "id" });
  }
};
