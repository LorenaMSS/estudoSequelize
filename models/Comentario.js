module.exports = (sequelize, DataTypes) => {
  //define(nomeM)
  const Comentario = sequelize.define(
    'Comentario',
    {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.STRING,
      posts_id: DataTypes.STRING,
    },
    {
      tableName: 'comentarios',
      timestamps: false,
    }
  );

  return Comentario;
};
