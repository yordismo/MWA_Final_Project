const express = require('express');
var logger = require('morgan');
const cors = require('cors');
const routes = require('./routes/route');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use('/course', routes.router)
app.use(function(err, req, res,next) {
    res.status(404).json(err);
});


app.listen(4000, () => console.log(`Server is started at 4000`));
