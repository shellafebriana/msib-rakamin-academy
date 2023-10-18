'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addMovie = [
      {
        title : 'One Piece',
        genres : 'action-fantasy',
        year : 2002,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Naruto',
        genres : 'action-fantasy',
        year : 2002,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Fairy Tail',
        genres : 'action-fantasy',
        year : 2002,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Hunter X Hunter',
        genres : 'action-fantasy',
        year : 2002,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ]
    
    await queryInterface.bulkInsert('Movies', addMovie, {
      ignoreDuplicates : true
    });
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Movies', null ,{})
  }
};
