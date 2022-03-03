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
      "tbUsers",
      [
        {
          email: "admin@gmail.com",
          password:
            "$2b$10$0Jij8MHv5NrN1KF8oNN1Z.QfR9sei.qI3JauU5S1pRRACeRmyFCZq", //admin1234
          fullName: "admin",
          phone: "082226005644",
          role: "admin",
          image:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646118000/OnlineCinemaAhsan/1645809652164-YinYang_as8jgv.jpg",
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
        },
        {
          email: "ahsan@gmail.com",
          password:
            "$2b$10$GZUCJSuUC0qDOIvdWrM0VekKoL560PBTKZk8aE38Em9LxndVf6oRa", //ahsan1234
          fullName: "Ahsan",
          phone: "082226005622",
          role: "user",
          image:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646118000/OnlineCinemaAhsan/noname_r41cke.png",
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
