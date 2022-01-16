import sequelize from 'sequelize';

module.exports = new sequelize('mysite', 'root', 'Petitfrancois-28', {
	host: 'localhost',
	dialect: 'mysql',
	operatorAliases: false,
});
