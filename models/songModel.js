module.exports = function (sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    artist: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    }
  });

  Song.associate = (models) => {
    Song.belongsToMany(models.Post, {
      through: 'SongPost',
      onDelete: "cascade"
    });
  };
  return Song;
};