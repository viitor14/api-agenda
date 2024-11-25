require('dotenv').config();

module.exports = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  dialect: 'mysql', // Defina corretamente o dialect para MySQL ou MariaDB
  port: process.env.DATABASE_PORT || 3306, // Caso a porta não esteja no .env, usa a padrão 3306
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
