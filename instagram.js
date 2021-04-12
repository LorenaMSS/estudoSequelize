const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

/*Usuario.findAll().then((resultado) => {
  console.table(resultado.map((user) => user.toJSON()));
});

P
ost.findAll().then((resultado) => {
  console.table(resultado.map((post) => post.toJSON()));
});

Comentario.findAll().then((resultado) => {
  console.table(resultado.map((comentario) => comentario.toJSON()));
});*/

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

Comentario.findAll({
  limit: 2,
  offset: 2,
}).then((resultado) => {
  console.table(resultado.map((comentario) => comentario.toJSON()));
});

/*Usuario.findAll({
  order:[ 
    ['id','ASC']
  ],
  limit:2,
  offset:2
}).then((resultado)=>{
  console.log(resultado.map((user) => user.toJSON()));

} )*/
