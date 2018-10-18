const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// //same as express.static but will specifically only render this filepath
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

//if there are any other files under public folder, it will provide access to those other files by using /endpointName
app.use(express.static('public'));

app.post('/F1', (req, res) => {
  db.createF1(req.body.name, req.body.email, req.body.password, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  })
});

app.get('/F1', (req, res) => {
  db.getForm1((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(3000, () => {console.log('listening on port', 3000)});
