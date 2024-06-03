const { Op } = require('sequelize');
const db = require('../models');

exports.createMaterial = async (req, res) => {
  try {
    const material = await db.Material.create({
      ...req.body,
      UserId: req.userId,
    });

    const populatedMaterial = await db.Material.findByPk(material.id, {
      include: [
        { model: db.User, attributes: ['email'] },
        { model: db.Category, attributes: ['name'] },
        { model: db.Subcategory, attributes: ['name'] },
      ],
    });

    const responseMessage = `Пользователь ${populatedMaterial.User.email} (${populatedMaterial.UserId}) создал материал с названием ${populatedMaterial.title}, в категории - ${populatedMaterial.Category.name} (${populatedMaterial.CategoryId}) и подкатегории - ${populatedMaterial.Subcategory.name} (${populatedMaterial.SubcategoryId})`;
    console.log({ message: responseMessage });
    res.json({ message: responseMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Остальные методы остаются без изменений

exports.getMaterials = async (req, res) => {
  try {
    const { category, subcategory, keyword } = req.query;
    const whereClause = {};

    if (subcategory) {
      whereClause.SubcategoryId = subcategory;
    }

    if (keyword) {
      whereClause[Op.or] = [
        { title: { [Op.like]: `%${keyword}%` } },
        { description: { [Op.like]: `%${keyword}%` } },
      ];
    }

    const materials = await db.Material.findAll({
      where: whereClause,
      include: [
        { model: db.User, attributes: ['email'] },
        { model: db.Category, attributes: ['name'] },
        { model: db.Subcategory, attributes: ['name'] },
      ],
    });

    const responseMessages = materials.map(material => ({
      message: `Пользователь ${material.User.email} (${material.UserId}) создал материал с названием ${material.title}, в категории - ${material.Category.name} (${material.CategoryId}) и подкатегории - ${material.Subcategory.name} (${material.SubcategoryId})`
    }));
    console.log(responseMessages);
    res.json(responseMessages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMaterial = async (req, res) => {
  try {
    const material = await db.Material.findByPk(req.params.id, {
      include: [
        { model: db.User, attributes: ['email'] },
        { model: db.Category, attributes: ['name'] },
        { model: db.Subcategory, attributes: ['name'] },
      ],
    });

    if (!material) return res.status(404).json({ error: 'Material not found' });

    const responseMessage = `Пользователь ${material.User.email} (${material.UserId}) создал материал с названием ${material.title}, в категории - ${material.Category.name} (${material.CategoryId}) и подкатегории - ${material.Subcategory.name} (${material.SubcategoryId})`;
    console.log({ message: responseMessage });
    res.json({
      message: responseMessage,
      ratings: material.Ratings,
      comments: material.Comments,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMaterial = async (req, res) => {
  try {
    const material = await db.Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material not found' });

    // Проверяем, что текущий пользователь является создателем материала
    if (material.UserId !== req.userId) {
      return res.status(403).json({ error: 'You are not authorized to update this material' });
    }
    const populatedMaterial = await db.Material.findByPk(material.id, {
      include: [
        { model: db.User, attributes: ['email'] },
        { model: db.Category, attributes: ['name'] },
        { model: db.Subcategory, attributes: ['name'] },
      ],
    });
  await material.update(req.body);
    const responseMessage = `Пользователь ${populatedMaterial.User.email} (${populatedMaterial.UserId}) обновил материал с названием ${populatedMaterial.title}, в категории - ${populatedMaterial.Category.name} (${populatedMaterial.CategoryId}) и подкатегории - ${populatedMaterial.Subcategory.name} (${populatedMaterial.SubcategoryId})`;
    console.log({ message: responseMessage });
    res.json({ message: responseMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

    
};

exports.deleteMaterial = async (req, res) => {
  try {
    const material = await db.Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material not found' });
    const populatedMaterial = await db.Material.findByPk(material.id, {
      include: [
        { model: db.User, attributes: ['email'] },
        { model: db.Category, attributes: ['name'] },
        { model: db.Subcategory, attributes: ['name'] },
      ],
    });

    // Проверяем, что текущий пользователь является создателем материала
    if (material.UserId !== req.userId) {
      return res.status(403).json({ error: 'You are not authorized to delete this material' });
    }

    await material.destroy();
    const responseMessage = `Пользователь ${populatedMaterial.User.email} (${populatedMaterial.UserId}) удалил материал с названием ${populatedMaterial.title}`;
    console.log({ message: responseMessage });
    res.json({ message: responseMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
