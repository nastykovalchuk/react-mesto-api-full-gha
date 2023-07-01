const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const { validateSignIn, validateSignUp } = require('../middlewares/validation');

router.post('/signin', validateSignIn, login);
router.post('/signup', validateSignUp, createUser);

module.exports = router;
