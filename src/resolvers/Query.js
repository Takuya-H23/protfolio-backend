const Query = {
  user: (parent, args, { db: { me } }) => me,
  testimonials: (parent, args, { db: { testimonials } }) => testimonials,
  projects: (parent, args, { db: { projects } }) => projects
}

export default Query
