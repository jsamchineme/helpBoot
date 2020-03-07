module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('projects', 'userId', {
      type: Sequelize.STRING,
    });
  },
  down: queryInterface => queryInterface.removeColumn('projects', 'userId'),
};
