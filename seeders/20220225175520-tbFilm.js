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
          tumbnail:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646118001/OnlineCinemaAhsan/TokyoRevengers_ezo5nb.jpg",
          filmUrl: "https://www.youtube.com/embed/ckbbqlBbG-8",
          price: 198000,
          idCategory: 1,
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
        },
        {
          title: "Karakai Jouzu no Takagi-san",
          description:
            "Having a friend that knows you inside out should be a good thing, but in Nishikata's case, the opposite is true. His classmate Takagi loves to tease him on a daily basis, and she uses her extensive knowledge of his behavior to predict exactly how he will react to her teasing, making it nearly impossible for Nishikata to ever make a successful comeback. Despite this, Nishikata vows to someday give Takagi a taste of her own medicine by making her blush out of embarrassment from his teasing.",
          tumbnail:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646893771/OnlineCinemaAhsan/Karakai_Jouzu_no_Takagi-san_bgjs69.jpg",
          filmUrl: "https://www.youtube.com/embed/Y3ROeM4tAGc",
          price: 100000,
          idCategory: 3,
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
        },
        {
          title: "The God of High School",
          description:
            "The 'God of High School' tournament has begun, seeking out the greatest fighter among Korean high school students! All martial arts styles, weapons, means, and methods of attaining victory are permitted. The prize? One wish for anything desired by the winner. Taekwondo expert Jin Mo-Ri is invited to participate in the competition. There he befriends karate specialist Han Dae-Wi and swordswoman Yu Mi-Ra, who both have entered for their own personal reasons. Mo-Ri knows that no opponent will be the same and that the matches will be the most ruthless he has ever fought in his life. But instead of being worried, this prospect excites him beyond belief.",
          tumbnail:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646893770/OnlineCinemaAhsan/The_God_of_Highschool_jyieyi.jpg",
          filmUrl: "https://www.youtube.com/embed/F6P0v0rm7LA",
          price: 155000,
          idCategory: 1,
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
        },
        {
          title: "Kanojo, Okarishimasu",
          description:
            "Kazuya Kinoshita is a 20-year-old college student who has a wonderful girlfriend: the bright and sunny Mami Nanami. But suddenly, he doesn't. Without warning, Mami breaks up with him, leaving him utterly heartbroken and lonely. Seeking to soothe the pain, he hires a rental girlfriend through an online app. His partner is Chizuru Mizuhara, who through her unparalleled beauty and cute demeanor, manages to gain Kazuya's affection.",
          tumbnail:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646893786/OnlineCinemaAhsan/Kanojo_Okarishimasu_vzxiwf.jpg",
          filmUrl: "https://www.youtube.com/embed/i4-p9o4Pnv0",
          price: 150000,
          idCategory: 3,
          createdAt: "2022-02-16 07:17:46",
          updatedAt: "2022-02-19 20:46:34",
        },
        {
          title: "Tensei shitara Slime Datta Ken",
          description:
            "Thirty-seven-year-old Satoru Mikami is a typical corporate worker, who is perfectly content with his monotonous lifestyle in Tokyo, other than failing to nail down a girlfriend even once throughout his life. In the midst of a casual encounter with his colleague, he falls victim to a random assailant on the streets and is stabbed. However, while succumbing to his injuries, a peculiar voice echoes in his mind, and recites a bunch of commands which the dying man cannot make sense of.",
          tumbnail:
            "https://res.cloudinary.com/kejepangan/image/upload/v1646893788/OnlineCinemaAhsan/Tensei_Shitara_Slime_Datta_Ken_crjdjr.jpg",
          filmUrl: "https://www.youtube.com/embed/RfFqXoZuio4",
          price: 199000,
          idCategory: 4,
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
