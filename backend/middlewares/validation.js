const { Joi, celebrate } = require('celebrate');
const { URL_REGEX } = require('../utils/constants');

// ../routes/auth

module.exports.validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
  }),
});

module.exports.validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(4),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(URL_REGEX),
  }),
});

// ../routes/cards

module.exports.validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(URL_REGEX),
  }),
});

module.exports.validateReqWithCardId = celebrate({
  body: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
});

// ../routes/users

module.exports.validateGetUser = celebrate({
  body: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});

module.exports.validatePatchProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

module.exports.validatePatchAvatar = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(URL_REGEX),
  }),
});

// module.exports.validate = celebrate({
//   body: Joi.object().keys({

//   }),
// });
