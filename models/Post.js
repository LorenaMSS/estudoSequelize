module.exports = (sequelize, DataTypes) => {
  //define(nomeM)
  const Post = sequelize.define(
    'Post',
    {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.STRING,
      n_likes: DataTypes.STRING,
    },
    {
      tableName: 'posts',
      timestamps: false,
    }
  );

  return Post;
};
