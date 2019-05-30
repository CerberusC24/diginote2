/* eslint-disable func-names */
/* eslint-disable eol-last */
// Book table that tracks title, author, pages, year released, plot and rating
module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    year: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Book.associate = (models) => {
    Book.belongsToMany(models.Post, {
      through: 'BookPost',
      onDelete: "cascade"
    });

  };
  return Book;
};