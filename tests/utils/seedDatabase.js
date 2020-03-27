import prisma from '../../src/prisma'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

const userOne = {
  input: {
    name: 'Emma',
    email: 'emma@example.com',
    password: bcrypt.hashSync('password')
  },
  user: undefined,
  jwt: undefined
}

const seedDatabase = async () => {
  await prisma.mutation.deleteManyProjects()
  await prisma.mutation.deleteManyTestimonials()
  await prisma.mutation.deleteManyUsers()

  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  })

  userOne.jwt = JWT.sign({ userId: userOne.user.id }, process.env.JWT_SECRET)

  await prisma.mutation.createProject({
    data: {
      name: 'GraphQL',
      objective: 'objective',
      overview: 'overview',
      gitAt: 'git.com',
      liveAt: 'live.com',
      deployedAt: 'March 2019',
      tools: { set: ['React', 'GraphQL'] },
      owner: { connect: { id: userOne.user.id } }
    }
  })

  await prisma.mutation.createTestimonial({
    data: {
      name: 'You',
      company: 'Google',
      text: 'You are awesome!',
      owner: { connect: { id: userOne.user.id } }
    }
  })
}

export { seedDatabase as default, userOne }
