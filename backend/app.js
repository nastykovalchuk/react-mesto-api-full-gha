const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const limiter = require('./middlewares/rateLimit');
const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');
const auth = require('./middlewares/auth');
const { PORT, DB_URL } = require('./configs/main');

require('dotenv').config();

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

const userRoutes = require('./routes/users');
const cardRoutes = require('./routes/cards');
const routeAuth = require('./routes/auth');

app.use('/', routeAuth);

app.use(auth);

app.use('/users', userRoutes);
app.use('/cards', cardRoutes);

app.use((req, res, next) => next(new NotFoundError('Page Not Found')));
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
