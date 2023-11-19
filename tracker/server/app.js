const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();

const port = process.env.PORT || 3333;
const root = __dirname;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(`root/index.html`);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
