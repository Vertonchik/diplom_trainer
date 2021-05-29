const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

// controllers
const {
  questionController,
  createQuestionController,
  updateQuestionController,
} = require('../controllers/question.controller.js');

router.get('/', [authMiddleware], questionController);
router.post('/create', [authMiddleware, roleMiddleware('ADMIN')], createQuestionController);
router.put('/update', [authMiddleware, roleMiddleware('ADMIN')], updateQuestionController);


module.exports = router