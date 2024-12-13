require('dotenv').config();

module.exports = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres', // Defina o dialect como PostgreSQL
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Permite conexões com certificados SSL genéricos
    },
  },
  define: {
    timestamps: true, // Ativa os campos createdAt e updatedAt
    underscored: true, // Converte nomes para snake_case
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
