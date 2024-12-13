import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig.url, {
  dialect: databaseConfig.dialect,
  dialectOptions: databaseConfig.dialectOptions,
  define: databaseConfig.define,
});

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
