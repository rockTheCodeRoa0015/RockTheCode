const { isAuth, isAdmin } = require('../../middleware/auth')
const {
  register,
  login,
  getUsers,
  getUserById,
  updateUsers,
  deleteUser
} = require('../controllers/users')

const usersRoutes = require('express').Router()

usersRoutes.get('/:id', [isAuth], getUserById)
usersRoutes.get('/', [isAuth], getUsers)
usersRoutes.post('/register', register)
usersRoutes.post('/login', login)
usersRoutes.put('/:id', [isAdmin], updateUsers)
usersRoutes.delete('/:id', [isAdmin], deleteUser)

module.exports = usersRoutes
