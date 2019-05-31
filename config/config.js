require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.USERPASSWORD,
    database: 'diginote2',
    host: 'localhost',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};