const router = require('express').Router();

const userRoutes = require('./users');
const cardRoutes = require('./cards');
const routeAuth = require('./auth');

const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.use('/', routeAuth);

router.use(auth);

router.use('/users', userRoutes);
router.use('/cards', cardRoutes);

router.use((req, res, next) => next(new NotFoundError('Page Not Found')));

module.exports = router;
