import { Model, DataTypes } from "sequelize";
import connection from "../connection.js";

const init_posts = (sequelize, Types) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "author_id",
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
  Post.init(
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author_id: {
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
        allowNull: true, // lab_id can be null if the post is not associated with a lab
        references: {
          model: "Labs",
          key: "id",
        },
        onDelete: "CASCADE",
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

  return Post;
};

export default init_posts(connection, DataTypes);
