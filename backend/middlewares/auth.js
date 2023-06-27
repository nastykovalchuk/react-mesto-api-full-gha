const jsonwebtoken = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/main');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
  let payload;
  try {
    payload = jsonwebtoken.verify(req.cookies.jwt, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }
  req.user = {
    _id: payload._id,
  };
  return next();
};
