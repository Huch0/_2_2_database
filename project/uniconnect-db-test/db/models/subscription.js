import { Model, DataTypes } from "sequelize";
import connection from "../connection.js";

const init_subscriptions = (sequelize, Types) => {
  class Subscription extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Lab, {
        foreignKey: "lab_id",
        targetKey: "id",
        onDelete: "CASCADE",
      });
    }
  }
  Subscription.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      lab_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Labs",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize, // Sequelize knows which instance to attach the model to.
      modelName: "Subscription",
      tableName: "Subscriptions",
      charset: "utf8",
      collate: "utf8_general_ci",
      // table will use the UTF-8 character set, and case-insensitive comparisons will be used when querying data.
    }
  );

  return Subscription;
};

export default init_subscriptions(connection, DataTypes);