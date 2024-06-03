const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, materialController.createMaterial);
router.get('/', materialController.getMaterials);
router.get('/:id', materialController.getMaterial);
router.put('/:id', authMiddleware, materialController.updateMaterial);
router.delete('/:id', authMiddleware, materialController.deleteMaterial);

module.exports = router;
