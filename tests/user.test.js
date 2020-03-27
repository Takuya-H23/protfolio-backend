/* eslint-disable */
import 'cross-fetch/polyfill'
import { gql } from 'apollo-boost'
import prisma from '../src/prisma'
import seedDatabase from './utils/seedDatabase'
import getClient from './utils/getClient'

const client = getClient()

beforeAll(() => {
  jest.setTimeout(1000 * 60)
})

beforeEach(seedDatabase)

test('Should create a new user', async () => {
  const createUser = gql`
    mutation {
      createUser(
        input: {
          name: "Andrew"
          email: "andrew@example.com"
          password: "password"
        }
      ) {
        user {
          id
          name
          email
        }
        token
      }
    }
  `
  const response = await client.mutate({ mutation: createUser })
  const userExists = await prisma.exists.User({
    id: response.data.createUser.user.id
  })

  expect(userExists).toBe(true)
})

test('Should expose public user profiles', async () => {
  const users = gql`
    query {
      users {
        id
        name
        email
      }
    }
  `
  const res = await client.query({ query: users })

  expect(res.data.users.length).toBe(1)
  expect(res.data.users[0].name).toBe('Emma')
  expect(res.data.users[0].email).toBe(null)
})

test('Should not login with bad credentials', async () => {
  const loginUser = gql`
    mutation {
      loginUser(
        input: { email: "emma@example.com", password: "wrong-password" }
      ) {
        user {
          id
          name
          email
        }
        token
      }
    }
  `
  await expect(client.mutate({ mutation: loginUser })).rejects.toThrow()
})
