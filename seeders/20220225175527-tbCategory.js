"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "tbCategories",
      [
        {
          name: "Action",
          createdAt: "2022-02-16 12:33:44",
          updatedAt: "2022-02-16 12:33:44",
        },
        {
          name: "Comedy",
          createdAt: "2022-02-16 12:33:44",
          updatedAt: "2022-02-16 12:33:44",
        },
        {
          name: "Rommance",
          createdAt: "2022-02-16 12:33:44",
          updatedAt: "2022-02-16 12:33:44",
        },
        {
          name: "Isekai",
          createdAt: "2022-02-16 12:33:44",
          updatedAt: "2022-02-16 12:33:44",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
