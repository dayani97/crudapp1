
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');


const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  const data = database.db("note-api")
  require('./app/routes')(app, data);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
});

