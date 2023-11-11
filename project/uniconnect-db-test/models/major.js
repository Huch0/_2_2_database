// CREATE TABEL Majors (
//     id INT PRIMARY KEY,
//     major_name VARCHAR(50) NOT NULL,
//     school_id INT,
//           FOREIGN KEY (school_id) REFERENCES Schools(id),
//     )

const Sequelize = require("sequelize");

module.exports = class Major extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        major_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        school_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Major",
        tableName: "Majors",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Major.belongsTo(db.School, { foreignKey: "school_id", targetKey: "id" });
  }
};
