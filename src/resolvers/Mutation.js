import uuid from 'uuid/v4'

const Mutation = {
  createProject: async (parent, { input, ownerId }, { prisma }, info) => {
    const owner = await prisma.exists.User({ id: ownerId })
    if (!owner) throw new Error('Unable to find owner')

    const data = {
      ...input,
      tools: { set: [...input.tools] },
      owner: { connect: { id: ownerId } }
    }
    return prisma.mutation.createProject({ data }, info)
  },
  updateProject: async (
    parent,
    { ownerId, projectId, input },
    { prisma },
    info
  ) => {
    const projectExists = await prisma.exists.Project({
      id: projectId,
      owner: { id: ownerId }
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
  deleteProject: async (parent, { ownerId, projectId }, { prisma }, info) => {
    const projectExists = await prisma.exists.Project({
      id: projectId,
      owner: { id: ownerId }
    })
    if (!projectExists) throw new Error('Project not found')

    return prisma.mutation.deleteProject({ where: { id: projectId } }, info)
  }
}

export default Mutation
