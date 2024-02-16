const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Congratulations Team1 20192!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
