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

server.start({ port: process.env.PORT || 4000 }, () =>
  console.log('Server is up!')
)
