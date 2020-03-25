import { GraphQLServer } from 'graphql-yoga'
import prisma from './prisma'
import resolvers from './resolvers'
import db from './db'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: () => ({
    db,
    prisma
  })
})

server.start(() => console.log('Server is up!'))
