var express = require('express');
var app = express();

app.get('/slow/:nth', function (req, res) {
  var n = fibonacci(req.params.nth);
  res.send('slow: ' + n);
});

function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    var n = fibonacci(n - 2) + fibonacci(n - 1);
    console.error(n);
    return n;
  }
}

app.get('/fast', function (req, res) {
  res.send('fast');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
