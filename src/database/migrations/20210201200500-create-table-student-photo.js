module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('photos', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,

    },
    originalName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => {
    await queryInterface.dropTable('photos');
  },
};
