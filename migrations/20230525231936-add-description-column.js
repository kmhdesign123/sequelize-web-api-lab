'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add column:
    await queryInterface.addColumn('Cryptids', 'description', { type: Sequelize.STRING })
  },
  async down(queryInterface, Sequelize) {
    // Remove column:
    await queryInterface.removeColumn('Cryptids', 'description')
  }
};