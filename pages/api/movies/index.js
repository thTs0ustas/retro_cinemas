const db = require('../../../models');

const { Movie, User, MovieOfTheMonth, Screening } = db.sequelize.models;

export default async function handler(_, res) {
  const movies = await Movie.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });
  res.json(movies);
}
