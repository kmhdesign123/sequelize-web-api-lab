'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Seed commands

    const date = new Date()

    await queryInterface.bulkInsert('Cryptids', [{
      name: 'Moth-Man',
      description: 'A winged creature with glowing red eyes associated with sightings of disaster or tragedy',
      region: 'United States', 
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {
    // Commands to revert seed
    
    await queryInterface.bulkDelete('Cryptids', null, {})

  }
};