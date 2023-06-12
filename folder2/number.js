const express = require('express');
const app = express();

app.get('/numbers', (req, res) => {
  const urls = req.query.url.split(',');
  const numbers = [];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    numbers.push(...data.numbers);
  }

  numbers = [...new Set(numbers)].sort((a, b) => a - b);

  res.json({
    numbers: numbers
  });
});

app.listen(3000, () => {
  console.log('Number management service listening on port 3000');
});
