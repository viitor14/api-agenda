import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },

        telefone: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Telefone precisar ser um numero',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  // Cada aluno pertence a um único User
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
