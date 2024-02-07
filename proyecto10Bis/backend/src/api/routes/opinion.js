const { isAuth, isAdmin } = require('../../middleware/auth')
const {
  getOpinions,
  getOpinionById,
  getOpinionByBook,
  getOpinionByUser,
  postOpinion,
  updateOpinion,
  deleteOpinion /*,
  updateRatingOpinion*/
} = require('../controllers/opinion')

const opinionsRoutes = require('express').Router()

opinionsRoutes.get('/getByBook/:id', getOpinionByBook)
opinionsRoutes.get('/getByUser/:id', [isAuth], getOpinionByUser)
opinionsRoutes.get('/:id', getOpinionById)
opinionsRoutes.get('/', getOpinions)
opinionsRoutes.post('/', [isAuth], postOpinion)
opinionsRoutes.put('/:id', [isAuth], updateOpinion)
//opinionsRoutes.put('/delRating/:id', [isAuth], updateRatingOpinion)
opinionsRoutes.delete('/:id', [isAdmin], deleteOpinion)

module.exports = opinionsRoutes
