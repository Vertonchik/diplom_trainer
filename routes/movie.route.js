const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// controllers
const {
  listController,
  getMovieController,
  updateMovieController,
  createMovieController,
  deleteMovieController,
} = require('../controllers/movie.controller.js');

router.get('/list', [authMiddleware], listController);
// admin
router.get('/byId', [authMiddleware, roleMiddleware('ADMIN')], getMovieController);
router.put('/update', [authMiddleware, roleMiddleware('ADMIN')], updateMovieController);
router.post('/create', [authMiddleware, roleMiddleware('ADMIN')], createMovieController);
router.post('/delete', [authMiddleware, roleMiddleware('ADMIN')], deleteMovieController);


module.exports = router;