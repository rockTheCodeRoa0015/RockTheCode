const { isAuth, isAdmin } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  register,
  login,
  getUsers,
  getUserById,
  getUserByUsernameAndMail,
  updateUsers,
  updateUsersPass,
  deleteUser,
  updateUsersFavouriteBook
} = require('../controllers/user')

const usersRoutes = require('express').Router()

usersRoutes.get('/:id', [isAuth], getUserById)
usersRoutes.get('/', [isAuth], getUsers)
usersRoutes.post('/byNameAndMail', getUserByUsernameAndMail)
usersRoutes.post('/register', upload.single('avatar'), register)
usersRoutes.post('/login', login)
usersRoutes.put('/:id', [isAuth], upload.single('avatar'), updateUsers)
usersRoutes.put('/pass/:id', upload.single('avatar'), updateUsersPass)
usersRoutes.delete('/:id', [isAdmin], deleteUser)
usersRoutes.put(
  '/delFavoutieBook/:id',
  [isAuth],
  upload.single('avatar'),
  updateUsersFavouriteBook
)

module.exports = usersRoutes
