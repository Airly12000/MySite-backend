'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('messages', {
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
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('messages');
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
