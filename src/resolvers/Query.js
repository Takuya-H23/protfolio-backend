import { checkAuth } from './../utils/auth'

const Query = {
  async user(parent, args, { prisma, userId }, info) {
    checkAuth(userId)

    const userExists = await prisma.exists.User({ id: userId })
    if (!userExists) throw new Error('User not found')

    return prisma.query.user({ where: { id: userId } }, info)
  },
  users(parent, args, { prisma }, info) {
    return prisma.query.users(null, info)
  },
  testimonials(parent, args, { prisma }, info) {
    return prisma.query.testimonials(null, info)
  },
  projects(parent, args, { prisma }, info) {
    return prisma.query.projects(null, info)
  }
}

export default Query
