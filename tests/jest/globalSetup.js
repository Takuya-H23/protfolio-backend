import '@babel/register'
import '@babel/polyfill/noConflict'
import server from '../../src/server'

export default async () => {
  global.httpServer = await server.start(() => console.log('testing...'))
}
