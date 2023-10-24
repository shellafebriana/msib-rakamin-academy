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
      {
        title : 'Spy x Family',
        genres : 'action comedy',
        year : 2021,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Oshi no Ko',
        genres : 'drama',
        year : 2022,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Youjo Senki',
        genres : 'isekai thriller',
        year : 2020,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Fate',
        genres : 'isekai',
        year : 2020,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : 'Re Zero Hajimekara',
        genres : 'isekai',
        year : 2018,
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
