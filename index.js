const express = require('express');
const path = require('path');
const db = require('./db/querys.js');
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}.`)
})