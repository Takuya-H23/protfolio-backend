import bcrypt from 'bcryptjs'
import { checkAuth, generateToken, hashPassword } from '../utils/auth'

const Mutation = {
  async loginUser(parent, { input }, { prisma }) {
    const user = await prisma.query.user({ where: { email: input.email } })
    if (!user) throw new Error('Unable to login')

    const isMatch = await bcrypt.compare(input.password, user.password)
    if (!isMatch) throw new Error('Unable to login')

    return {
      user,
      token: generateToken(user.id)
    }
  },
  // closed because no users needed
  // async createUser(parent, { input }, { prisma }) {
  //   const password = await hashPassword(input.password)

  //   const user = await prisma.mutation.createUser({
  //     data: { ...input, password }
  //   })

  //   return {
  //     user,
  //     token: generateToken(user.id)
  //   }
  // },
  async createTestimonial(parent, { input }, { prisma, userId }, info) {
    checkAuth(userId)

    const owner = await prisma.exists.User({ id: userId })
    if (!owner) throw new Error('Unable to find owner')

    return prisma.mutation.createTestimonial(
      { data: { ...input, owner: { connect: { id: userId } } } },
      info
    )
  },
  async updateTestimonial(
    parent,
    { testimonialId, input },
    { prisma, userId },
    info
  ) {
    checkAuth(userId)

    const testimonialExists = await prisma.exists.Testimonial({
      id: testimonialId,
      owner: { id: userId }
    })
    if (!testimonialExists) throw new Error('Testimonial not found')

    return prisma.mutation.updateTestimonial(
      { data: input, where: { id: testimonialId } },
      info
    )
  },
  async deleteTestimonial(parent, { testimonialId }, { prisma, userId }, info) {
    checkAuth(userId)

    const testimonialExists = await prisma.exists.Testimonial({
      id: testimonialId,
      owner: { id: userId }
    })
    if (!testimonialExists) throw new Error('Testimonial not found')

    return prisma.mutation.deleteTestimonial(
      { where: { id: testimonialId } },
      info
    )
  },
  async createProject(parent, { input }, { prisma, userId }, info) {
    checkAuth(userId)

    const data = {
      ...input,
      tools: { set: [...input.tools] },
      owner: { connect: { id: userId } }
    }
    return prisma.mutation.createProject({ data }, info)
  },
  async updateProject(parent, { projectId, input }, { prisma, userId }, info) {
    checkAuth(userId)

    const projectExists = await prisma.exists.Project({
      id: projectId,
      owner: { id: userId }
    })
    if (!projectExists) throw new Error('Project not found')

    if (input.tools?.length) {
      input.tools = { set: [...input.tools] }
    }

    return prisma.mutation.updateProject(
      { data: input, where: { id: projectId } },
      info
    )
  },
  async deleteProject(parent, { projectId }, { prisma, userId }, info) {
    checkAuth(userId)

    const projectExists = await prisma.exists.Project({
      id: projectId,
      owner: { id: userId }
    })
    if (!projectExists) throw new Error('Project not found')

    return prisma.mutation.deleteProject({ where: { id: projectId } }, info)
  }
}

export default Mutation
