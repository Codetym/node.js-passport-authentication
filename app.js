const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// EJS Middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on Port ${PORT}`));