const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/:materialId', authMiddleware, commentController.createComment);
router.get('/:materialId', commentController.getComments);

module.exports = router;
