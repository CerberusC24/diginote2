module.exports = function (sequelize, DataTypes) {
  const Img = sequelize.define("Img", {

    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Img.associate = (models) => {
    Img.belongsToMany(models.Post, {
      through: 'ImgPost',
      onDelete: "cascade"
    });
  };
  return Img;
}