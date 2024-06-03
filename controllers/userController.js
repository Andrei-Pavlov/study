const db = require('../models');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    console.log(`Пользователь создан с почтой - ${user.email} (${user.id})`);
    res.json(`Пользователь создан с почтой -  ${user.email}  (${user.id})`);
  } catch (error) {
    res.status(400).json("Пользователь с такой почтой уже существует");
  }
};

exports.login = async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (!user || !await user.validPassword(req.body.password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user.id }, 'your_secret_key');
    console.log({message: `токен пользователя - ${token}` });
    res.json({message: `токен пользователя - ${token}` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
