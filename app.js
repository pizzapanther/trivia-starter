const express = require('express');
const axios = require('axios');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static('build'));

app.get('/api/get-questions', function (req, res, next) {
  axios.get('https://opentdb.com/api.php?amount=10')
    .then(function (response) {
      res.json(response.data);
    })
    .catch(next);
});

app.post('/login', function (req, res) {
  // check username & password
  // generate token
  // res.json({jwt: token});
});

app.listen(9090, function () {
  console.log('Listening on port 9090');
});
