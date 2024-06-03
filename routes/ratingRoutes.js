const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:materialId', authMiddleware, ratingController.createRating);
router.get('/:materialId', ratingController.getRatings);

module.exports = router;
