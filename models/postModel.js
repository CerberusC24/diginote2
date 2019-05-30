module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = (models) => {

    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.belongsToMany(models.Book, {
      through: 'BookPost',
      onDelete: "cascade"
    });

    Post.belongsToMany(models.Movie, {
      through: 'MoviePost',
      onDelete: "cascade"
    });

    Post.belongsToMany(models.Img, {
      through: 'ImgPost',
      onDelete: "cascade"
    });

    Post.belongsToMany(models.Song, {
      through: 'SongPost',
      onDelete: "cascade"
    });

    Post.belongsToMany(models.Category, {
      through: 'CategoryPost',
      onDelete: "cascade"
    });
  };
  return Post;
};