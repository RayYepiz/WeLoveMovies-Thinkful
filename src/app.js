if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const notFound = require('../src/errors/notFound');
const errorHandler = require('../src/errors/errorHandler');
const moviesRouter = require('./movies/movies.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');



app.use('/movies',moviesRouter);
app.use('/theaters',theatersRouter);
app.use('/reviews',reviewsRouter);

app.use(notFound);

//general error handler

app.use(errorHandler);

module.exports = app;
