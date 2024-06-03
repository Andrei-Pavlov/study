const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.post('/:categoryId/subcategories', authMiddleware, categoryController.createSubcategory);
router.get('/:categoryId/subcategories', categoryController.getSubcategories);

module.exports = router;
