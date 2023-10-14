const express = require('express');
const cors = require('cors');

const pool = require('./db');
const { request } = require('http');

const app = express();

const port = process.env.PORT || 3000;
const root = __dirname;

// CORS: Cross Origin Resource Sharing
// middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// ROUTES //

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      `INSERT INTO todo(description) VALUES($1) RETURNING *`,
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo');

    res.json(todos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  const { id } = req.params;

  const requestedTodo = await pool.query('SELECT * FROM todo WHERE id = $1', [
    id,
  ]);

  res.json(requestedTodo.rows[0]);
});

// update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const newDescription = req.body.description;

    await pool.query('UPDATE todo SET description = $1 WHERE id = $2', [
      newDescription,
      id,
    ]);

    const updatedTodo = await pool.query('SELECT * FROM todo WHERE id = $1', [
      id,
    ]);

    res.json(updatedTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await pool.query('DELETE FROM todo WHERE id = $1', [
      id,
    ]);

    res.json(`Deleted ${deletedTodo.rowCount} todos.`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
