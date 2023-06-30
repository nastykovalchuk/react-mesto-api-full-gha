const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('./middlewares/cors');
const limiter = require('./middlewares/rateLimit');
const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT, DB_URL } = require('./configs/main');

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
})
  .then(() => console.log('Database connected.'))
  .catch(() => console.log('No connected to database.'));

const app = express();

app.use(limiter);
app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(requestLogger);

app.use(cors);

const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const routeAuth = require('./routes/auth');

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use('/', routeAuth);

app.use(auth);

app.use('/users', userRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => next(new NotFoundError('Page Not Found')));

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
