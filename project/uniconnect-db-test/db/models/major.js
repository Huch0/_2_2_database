// CREATE TABEL Majors (
//     id INT PRIMARY KEY,
//     major_name VARCHAR(50) NOT NULL,
//     school_id INT,
//           FOREIGN KEY (school_id) REFERENCES Schools(id),
//     )

import { Model, DataTypes } from "sequelize";
import connection from "../connection.js";

const init_majors = (sequelize, Types) => {
  class Major extends Model {
    static associate(models) {
      this.belongsTo(models.School, {
        foreignKey: "school_id",
        targetKey: "id",
      });
    }
  }
  Major.init(
    {
      major_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      school_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize, // Sequelize knows which instance to attach the model to.
      modelName: "Major",
      tableName: "Majors",
      charset: "utf8",
      collate: "utf8_general_ci",
      // table will use the UTF-8 character set, and case-insensitive comparisons will be used when querying data.
    }
  );

  return Major;
};

export default init_majors(connection, DataTypes);