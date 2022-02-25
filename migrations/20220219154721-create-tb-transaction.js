"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tbTransactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idFilm: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
      },
      accountNumber: {
        type: Sequelize.STRING,
      },
      transferProof: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tbTransactions");
  },
};
