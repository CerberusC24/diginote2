module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    categoryTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Post, {
      through: 'CategoryPost',
      onDelete: "cascade"
    });
  };

  return Category;
};