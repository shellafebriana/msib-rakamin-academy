'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // const addUser = [
    //   {
    //     email : 'user1@gmail.com',
    //     genres : 'action-fantasy',
    //     year : 2002,
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     email : 'user2@gmail.com',
    //     genres : 'action-fantasy',
    //     year : 2002,
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     email : 'user3@gmail.com',
    //     genres : 'action-fantasy',
    //     year : 2002,
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    //   {
    //     email : 'user4@gmail.com',
    //     genres : 'action-fantasy',
    //     year : 2002,
    //     createdAt : new Date(),
    //     updatedAt : new Date()
    //   },
    // ]
    
    // await queryInterface.bulkInsert('Movies', addMovie, {
    //   ignoreDuplicates : true
    // });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
