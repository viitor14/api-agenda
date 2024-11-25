"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email inválido',
            },
          },
        },

        telefone: {
          type: _sequelize2.default.INTEGER,
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
} exports.default = Aluno;
