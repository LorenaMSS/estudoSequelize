const sequelize = require('sequelize');
const config = require('./config/config');

conecDB
  .query('SELECT * FROM usuarios', sequelize.QueryTypes.SELECT)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
