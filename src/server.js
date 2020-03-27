import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma'
import resolvers from './resolvers'
import { getUserId } from './utils/auth'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(req) {
    return {
      prisma,
      userId: getUserId(req)
    }
  }
})

export default server
