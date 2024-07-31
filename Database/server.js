const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const { Sequelize, Model, DataTypes } = require('sequelize');

const app = express();
const port = 3001;

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Define User model
class User extends Model {}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize, modelName: 'user' });

// Define Task model
class Task extends Model {}
Task.init({
  description: DataTypes.STRING,
  priority: DataTypes.STRING
}, { sequelize, modelName: 'task' });

// Sync models with database
sequelize.sync();

// Use the cors middleware
app.use(cors());

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CRUD routes for User model
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

app.post('/users/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user && user.password === req.body.password) {
      res.json({ message: 'Login successful', userId: user.id });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

app.put('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// CRUD routes for Task model
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.get('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  res.json(task);
});

app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
});

app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
