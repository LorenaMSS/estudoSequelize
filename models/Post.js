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

  Post.associate = (models) => {
    // relação N:1 (vários posts de 1 usuario)
    Post.belongsTo(models.Usuario, {
      as: 'usuario',
      foreignKey: 'usuarios_id',
    });
  };

  Post.associate = (models) => {
    // relação 1:N (usuario tem varios posts)
    Post.hasMany(models.Comentario, {
      as: 'comentario',
      foreignKey: 'usuarios_id',
    });
  };

  return Post;
};
