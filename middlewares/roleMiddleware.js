const jwt = require('jsonwebtoken');

module.exports = function (roles) {
  return async function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.token
      if (!token) {
        return res.status(401).json({ message: 'Пользователь не авторизован' });
      }
      const { roles: userRoles } = jwt.verify(token, process.env.JWT_SECRET);
      console.log(userRoles);
      let hasRole = false;
      userRoles.forEach(role => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      })

      if (!hasRole) {
        return res.status(403).json({ message: 'Нет доступа' });
      }

      next();
      
    } catch (e) {
      console.log(e);
      return res.status(403).json({ message: 'Нет доступа' });
    }
  }
}
