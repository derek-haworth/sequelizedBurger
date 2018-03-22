'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'Customer', 'BurgerId', Sequelize.INTEGER );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'Customer', 'BurgerId' );
  }
};
