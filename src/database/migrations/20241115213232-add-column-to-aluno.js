/* eslint-disable implicit-arrow-linebreak */
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('alunos', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    }),

  down() {},
};
