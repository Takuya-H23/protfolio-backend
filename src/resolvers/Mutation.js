import uuid from 'uuid/v4'

const Mutation = {
  createProject: (parent, { input }, { db }) => {
    const project = { id: uuid(), ...input }
    db.projects.unshift(project)
    return project
  },
  updateProject: (parent, { input }, { db }) => {
    const project = db.projects.find(project => project.id === input.id)
    if (!project) throw new Error('Project not found')

    if (input.name) project.name = input.name
    if (input.overview) project.overview = input.overview
    if (input.objective) project.objective = input.objective
    if (input.tools?.length) project.tools = input.tools
    if (input.gitAt) project.gitAt = input.gitAt
    if (input.liveAt) project.liveAt = input.liveAt
    if (input.deployedAt) project.deployedAt = input.deployedAt

    db.projects.unshift(project)

    return project
  },
  deleteProject: (parent, { id }, { db }) => {
    const project = db.projects.findIndex(project => project.id === id)
    if (project === -1) throw new Error('Project not found')

    return db.projects.splice(project, 1)[0]
  }
}

export default Mutation
