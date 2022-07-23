const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const styleRouter = require('./routes/style');

const PORT = 4000;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/style', styleRouter);

// catch 404 and forward to error handler
app.use((_, __, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // render the error page
    console.error(err.stack);
    res.status(err.status || 500);
    res.end(err.message);
});

app.listen(PORT, () => {
    console.log(`server listen http://localhost:${PORT}`);
});
