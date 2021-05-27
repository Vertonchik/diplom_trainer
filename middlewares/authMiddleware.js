const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

module.exports = async function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.token
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decodedData;
    next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Пользователь не авторизован' });
  }
}