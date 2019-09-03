const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({users: []})
  .write();

const app = express();
app.use(express.json());

app.post('/users', function (req, res) {
  const user = {id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname};

  db.get('users')
    .push(user)
    .write();

  res.send(user);
});

app.listen(3000);
