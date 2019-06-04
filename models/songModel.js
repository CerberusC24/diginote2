module.exports = function (sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    album: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    previewLink: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    albumCoverLarge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    albumCoverSmall: {
      type: DataTypes.STRING,
      allowNull: true
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