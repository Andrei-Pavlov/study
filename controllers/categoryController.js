const db = require('../models');

exports.createCategory = async (req, res) => {
  try {
    const category = await db.Category.create(req.body);
    console.log(`Категория создана ,${category.name} (${category.id})`);
    res.json(`Категория создана ,${category.name}  (${category.id})`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    const categoryMessages = categories.map(category => `${category.name} (${category.id})`).join(', ');
    
    console.log({ message: `Категории получены: ${categoryMessages}` });
    res.json({ message: `Категории получены: ${categoryMessages}`});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createSubcategory = async (req, res) => {
  try {
    const subcategory = await db.Subcategory.create({
      name: req.body.name,
      CategoryId: req.params.categoryId,
    });
    console.log(`Подкатегория создана ,${subcategory.name} (${subcategory.id})`);
    res.json(`Подкатегория создана ,${subcategory.name}  (${subcategory.id})`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await db.Subcategory.findAll({
      where: { CategoryId: req.params.categoryId },
      include: [{ model: db.Category }]
    });

    const subCategoryMessages = subcategories.map(subcategory => 
      `${subcategory.name} (${subcategory.id}) в категории ${subcategory.Category.name} (${subcategory.CategoryId}) || `
    ).join(', ');

    console.log({ message: `Подкатегории получены: ${subCategoryMessages}` });
    res.json({ message: `Подкатегории получены: ${subCategoryMessages}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
