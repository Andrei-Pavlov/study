const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:materialId/reviews', authMiddleware, reviewController.createReview);
router.get('/:materialId/reviews', reviewController.getReviews);

module.exports = router;
