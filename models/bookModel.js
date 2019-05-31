module.exports = function (sequelize, DataTypes) {
  const Book = sequelize.define('Book', {
    cover: {
      type: DataTypes.STRING,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
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
    plot: {
      type: DataTypes.TEXT,
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