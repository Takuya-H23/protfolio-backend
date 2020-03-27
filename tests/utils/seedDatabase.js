import prisma from '../../src/prisma'
import bcrypt from 'bcryptjs'

export default async () => {
  await prisma.mutation.deleteManyProjects()
  await prisma.mutation.deleteManyTestimonials()
  await prisma.mutation.deleteManyUsers()

  const user = await prisma.mutation.createUser({
    data: {
      name: 'Emma',
      email: 'emma@example.com',
      password: bcrypt.hashSync('password')
    }
  })

  await prisma.mutation.createProject({
    data: {
      name: 'GraphQL',
      objective: 'objective',
      overview: 'overview',
      gitAt: 'git.com',
      liveAt: 'live.com',
      deployedAt: 'March 2019',
      tools: { set: ['React', 'GraphQL'] },
      owner: { connect: { id: user.id } }
    }
  })

  await prisma.mutation.createTestimonial({
    data: {
      name: 'You',
      company: 'Google',
      text: 'You are awesome!',
      owner: { connect: { id: user.id } }
    }
  })
}
