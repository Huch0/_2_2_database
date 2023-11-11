// CREATE TABLE Profiles (
//     user_id INT PRIMARY KEY,
//     name VARCHAR(50),
//     school_id INT,
//     major_id INT,
//     lab_id INT,
//     degree ENUM('undergraduate', 'master', 'doctoral', 'professor'),

//     FOREIGN KEY (user_id) REFERENCES Users(id),
//     FOREIGN KEY (school_id) REFERENCES Schools(id),
//     FOREIGN KEY (major_id) REFERENCES Majors(id),
//     FOREIGN KEY (lab_id) REFERENCES Labs(id)
// );

const Sequelize = require("sequelize");

module.exports = class Profile extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(50),
          allowNull: true,
        },
        school_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        major_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        lab_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        degree: {
          type: Sequelize.ENUM(
            "undergraduate",
            "master",
            "doctoral",
            "professor"
          ),
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Profile",
        tableName: "Profiles",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Profile.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Profile.belongsTo(db.School, {
      foreignKey: "school_id",
      targetKey: "id",
    });
    db.Profile.belongsTo(db.Major, { foreignKey: "major_id", targetKey: "id" });
    db.Profile.belongsTo(db.Lab, { foreignKey: "lab_id", targetKey: "id" });
  }
};
