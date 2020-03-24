const resolvers = {
  Query: {
    me: () => ({ name: 'takuya', email: 'email' }),
    testimonials: (parent, args, { db: { testimonials } }) => testimonials,
    projects: (parent, args, { db: { projects } }) => projects
  }
}

export default resolvers
