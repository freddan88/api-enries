require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const { mongo } = require('./config');

// Allow CORS requests
app.use(cors());
app.options('*', cors());

// Parse POST data and place in req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
const router = require('./routes');
app.use('/', router);

// Handle unsupported routes
app.use((req, res, next) => {
    const error = new Error('This is not the route you are looking for');
    error.status = 404;
    next(error);
});

// Handle errors thrown in routes
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));
