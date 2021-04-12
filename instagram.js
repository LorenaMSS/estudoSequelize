const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');
/*Usuario.findAll().then((resultado) => {
  console.table(resultado.map((user) => user.toJSON()));
});

/*Post.findAll().then((resultado) => {
  console.table(resultado.map((post) => post.toJSON()));
});

Comentario.findAll().then((resultado) => {
  console.table(resultado.map((comentario) => comentario.toJSON()));
});*/

/*Usuario.destroy({
  where: {
    id: 3,
  },
}).then((resultado) => {
  console.log(resultado);
});

/*Usuario.update(
  {
    email: 'sergio@digitalhouse.com',
  },
  {
    where: {
      id: 2,
    },
  }
).then((resultado) => {
  console.log(resultado);
});

/*Usuario.findAll({
  where: {
    nome: { [Op.like]: '%a%' },
  },
}).then((resultado) => {
  console.log(resultado.map((user) => user.toJSON()));
});*/

/*Usuario.findAll({
  where: {
    nome: { [Op.notLike]: '%a%' },
  },
}).then((resultado) => {
  console.log(resultado.map((user) => user.toJSON()));
});/*

/*Post.findAll({
  where: {
    texto: { [Op.notLike]: '%a%' },
  },
}).then((resultado) => {
  console.log(resultado.map((post) => post.toJSON()));
});*/

/*Comentario.findAll({
  limit: 2,
  offset: 2,
}).then((resultado) => {
  console.table(resultado.map((comentario) => comentario.toJSON()));
});
*/

/*Usuario.create({
  nome: 'Elian',
  email: 'Elian@digitalhouse.com',
  senha: '12345',
}).then((resultado) => {
  console.log(resultado.toJSON());
});


/*Post.create({
  texto: 'E aí pessoal!',
  usuarios_id: 6,
  n_likes: 2,
}).then((resultado) => {
  console.log(resultado.toJSON);
});*/

/*Usuario.findAll({
  order:[ 
    ['id','ASC']
  ],
  limit:2,
  offset:2
}).then((resultado)=>{
  console.log(resultado.map((user) => user.toJSON()));

} )*/

Usuario.findByPk(1, { include: ['posts'] }).then((usuario) => {
  console.table(usuario.toJSON());
  sequelize.close();
});

Post.findByPk(1, { include: ['comentario'] }).then((post) => {
  console.table(post.toJSON());
  sequelize.close();
});
