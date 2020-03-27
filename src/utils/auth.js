import JWT from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export function getUserId(req) {
  const header = req.request.headers.authorization
  if (!header) return null

  const token = header.replace('Bearer ', '')
  const decoded = JWT.verify(token, process.env.JWT_SECRET)

  return decoded.userId
}

export function checkAuth(userId) {
  if (!userId) throw new Error('Authentication required')
}

export function generateToken(userId) {
  return JWT.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

export function hashPassword(password) {
  if (password.trim().length < 8) {
    throw new Error('Password must be 8 characters or longer')
  }
  return bcrypt.hash(password, 10)
}
