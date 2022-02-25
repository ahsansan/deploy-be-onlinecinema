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
      "tbFilms",
      [
        {
          title: "Tokyo Revengers",
          description:
            "Takemichi Hanagaki’s second year of middle school was the highest point in his life. He had respect, a gang of friends he could count on, and even a girlfriend. But that was twelve years ago. Today, he’s a nobody: a washed-up nonentity made fun of by children and always forced to apologize to his younger boss. A sudden news report on the Tokyo Manji Gang’s cruel murder of the only girlfriend he ever had alongside her brother only adds insult to injury. Half a second before a train ends his pitiful life for good, Takemichi flashes back to that same day twelve years ago, when he was still dating Hinata Tachibana.",
          tumbnail: "TokyoRevengers.jpeg",
          filmUrl: "https://www.youtube.com/embed/ckbbqlBbG-8",
          price: 198000,
          idCategory: 1,
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
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
