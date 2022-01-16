import sequelize from '../database/Connection';
import Sequelize from 'sequelize';

module.exports = sequelize.define('message', {
	id: {
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER(11),
	},
	email: Sequelize.STRING,
	message: Sequelize.STRING,
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
});
