const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');

const adapter = new FileSync('db.json');

const db = low(adapter);
// Set some defaults (required if your JSON file is empty)
db.defaults({users: []})
  .write();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/users', (req: any, res: any) => {
  // validation
  /*  if (!req.body.firstname) {
      res.status(400).send({firstname: 'required'});
    } else if (!req.body.lastname) {
      res.status(400).send({lastname: 'required'});
    } else if (!req.body.email) {
      res.status(400).send({email: 'required'});
    }*/

  const user = {
    id: req.body.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    telephone: req.body.telephone,
  };

  db.get('users')
    .push(user)
    .write();

  setTimeout(() => {
    res.send(user);
  }, 1000);
});

app.get('/users', (req: any, res: any) => {
  const users = db.get('users').value();

  res.send(users);
});

app.listen(3000);
