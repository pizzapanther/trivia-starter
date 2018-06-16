const express = require('express');

var app = express();

app.use(express.static('build'));

app.get('/api/get-questions', function (req, res) {
  res.json({questions: []});
});

app.listen(9090, function () {
  console.log('Listening on port 9090');
});
