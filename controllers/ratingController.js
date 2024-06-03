const db = require('../models');

exports.createRating = async (req, res) => {
  try {
    const { materialId } = req.params;
    const { score } = req.body;

    const rating = await db.Rating.create({
      score,
      MaterialId: materialId,
      UserId: req.userId,
    });
    console.log(`Рейтинг создан, ${rating.score} (${rating.id})`);
    res.json(`Рейтинг создан, ${rating.score}  (${rating.id})`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRatings = async (req, res) => {
  try {
    const { materialId } = req.params;
    const ratings = await db.Rating.findAll({
      where: { MaterialId: materialId },
    });
    const ratingMessages = ratings.map(rating => `${rating.score} (${rating.id})`).join(', ');
    
    console.log({ message: `Рейтинги получены: ${ratingMessages}` });
    res.json({ message: `Рейтинги получены: ${ratingMessages}`});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
