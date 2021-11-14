/*const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb+srv://mongoD:mongoD@cluster0.1xlhi.mongodb.net/course?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  if (!db) {
    client.connect(function (err) {
      db = client.db('course');
      req.db = db.collection('courseList');
      next();
    });
  } else {
    req.db = db.collection('courseList');
    next();
  }
});

app.get('/', (req, res) => {
  req.db.find({}).toArray((err, data) => res.json(data))
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

app.listen(3000, () => console.log('listening to 3000'));

*/
