const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default async function handler(_, res) {
  const movies = await prisma.movies_of_the_month.findMany({
    select: {
      id: true,
      movies: true,
      createdAt: false,
      updatedAt: false,
      screenings: {
        where: {
          movie_starts: {
            gte: new Date('05-21-2022'),
            lt: new Date('05-22-2022'),
          },
        },
        orderBy: {
          id: 'asc',
        },
      },
    },
  });
  res.json(movies);
}
