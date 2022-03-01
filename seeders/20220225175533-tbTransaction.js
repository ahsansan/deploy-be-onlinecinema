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
      "tbTransactions",
      [
        {
          idUser: 2,
          idFilm: 1,
          status: "Pending",
          accountNumber: "198313819",
          transferProof:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646118000/OnlineCinemaAhsan/bca_soczmv.jpg",
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
