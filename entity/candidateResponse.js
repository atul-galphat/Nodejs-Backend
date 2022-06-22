module.exports = (sequelize, Sequelize) => {
    const candiadteResponse = sequelize.define("candidateresponse", {      // product is the entity name
      candidateId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      examId: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      queId: {
        type: Sequelize.INTEGER
      },
      responseId: {
        type: Sequelize.INTEGER
      }
    });
    return candiadteResponse;
  };