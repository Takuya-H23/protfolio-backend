const User = {
  email: {
    fragment: 'fragment userId on User { id }',
    async resolve(parent, args, { userId }) {
      return parent.id === userId ? parent.email : null
    }
  }
}

export default User
