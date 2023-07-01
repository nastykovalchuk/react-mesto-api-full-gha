const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('./middlewares/cors');
const limiter = require('./middlewares/rateLimit');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes');

const { PORT, DB_URL } = require('./configs/main');

mongoose.connect(DB_URL, { useNewUrlParser: true })
  .then(() => console.log('Database connected.'))
  .catch(() => console.log('No connected to database.'));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(limiter);
app.use(helmet());
app.use(cors);

app.use(requestLogger);
app.use(routes);
app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
