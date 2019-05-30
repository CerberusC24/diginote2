module.exports = function (sequelize, DataTypes) {

  const Movie = sequelize.define("Movie", {
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cast: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Movie.associate = (models) => {
    Movie.belongsToMany(models.Post, {
      through: 'MoviePost',
      onDelete: "cascade"
    });
  };
  return Movie;
};