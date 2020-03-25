const Query = {
  user: (parent, { id }, { prisma }, info) =>
    prisma.query.user({ where: { id } }, info),
  users: (parent, args, { prisma }, info) => prisma.query.users(null, info),
  testimonials: (parent, args, { prisma }, info) =>
    prisma.query.testimonials(null, info),
  projects: (parent, args, { prisma }, info) =>
    prisma.query.projects(null, info)
}

export default Query
