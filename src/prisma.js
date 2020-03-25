import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466'
})

// prisma.mutation
//   .createUser(
//     {
//       data: {
//         name: 'Takuya',
//         email: 'takuya2@takuya.com'
//       }
//     },
//     '{ id name email }'
//   )
//   .then(data => console.log(console.log(JSON.stringify(data, undefined, 2))))

// prisma.mutation.deleteUser(
//   { where: { id: 'ck87fc5zn00pj0787iqjrcrae' } },
//   '{ id name email }'
// )

// prisma.query.users(null, '{id name email }').then(console.log)
