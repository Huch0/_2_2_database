"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      "Users",
      [
        {
          id: 1,
          user_name: "허치영",
          email: "cldud1@pusan.ac.kr",
          password: "password",
          role: "researcher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          user_name: "하현진",
          email: "hyeonjin1@pusan.ac.kr",
          password: "password",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          user_name: "Cho Joon Soo",
          email: "jscho@pusan.ac.kr",
          password: "password",
          role: "lab_manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          user_name: "서 준",
          email: "dntjd@pusan.ac.kr",
          password: "password",
          role: "student",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          user_name: "주우성",
          email: "tjwns@pusan.ac.kr",
          password: "password",
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          user_name: "김민혁",
          email: "alsgur1@pusan.ac.kr",
          password: "password",
          role: "reader",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          user_name: "이근우",
          email: "rmsdn1@pusan.ac.kr",
          password: "password",
          role: "reader",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
