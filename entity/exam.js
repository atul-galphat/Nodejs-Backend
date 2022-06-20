const candidate = require("./candidate");

module.exports = (sequelize, Sequelize) => {
  const exam = sequelize.define("candidateexam", {
    examName: {
      type: Sequelize.STRING
      //allowNull : false
    },
    examType: {
      type: Sequelize.STRING
    },
    startTime: {
      type: Sequelize.DATE
    },
    duration: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER,
      allownull: false,
      defaultValue: 0,
      validate: {
        isIn: [[0, 1, 2]]
      }
    },
    candidateId: {
      type: Sequelize.INTEGER
    }
  });

  return exam;
};