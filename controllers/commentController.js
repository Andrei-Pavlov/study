const db = require('../models');

exports.createComment = async (req, res) => {
  try {
    const { materialId } = req.params;
    const { text } = req.body;

    const comment = await db.Comment.create({
      text,
      MaterialId: materialId,
      UserId: req.userId,
    });
    console.log(`Комментарий создан, ${comment.text} (${comment.id})`);
    res.json(`Комментарий создан, ${comment.text}  (${comment.id})`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const { materialId } = req.params;
    const comments = await db.Comment.findAll({
      where: { MaterialId: materialId },
    });
    const commentMessages = comments.map(comment => `${comment.text} (${comment.id})`).join(', ');
    
    console.log({ message: `Категории получены: ${commentMessages}` });
    res.json({ message: `Категории получены: ${commentMessages}`});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
