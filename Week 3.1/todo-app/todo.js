const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the HTTP methods specified
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow the Content-Type header
  next();
});

// Your existing routes...
const todosFilePath = path.join(__dirname, 'todos.json');

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/todos', (req, res) => {
  fs.readFile(todosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      const todos = JSON.parse(data);
      res.json(todos);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing todos JSON');
    }
  });
});

app.get('/todos/:id', (req, res) => {
  fs.readFile(todosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      const todos = JSON.parse(data);
      const todoIndex = findIndex(todos, parseInt(req.params.id));
      if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
      }
      res.json(todos[todoIndex]);
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing todos JSON');
    }
  });
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile(todosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      const todos = JSON.parse(data);
      todos.push(newTodo);
      fs.writeFile(todosFilePath, JSON.stringify(todos), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        res.status(201).json(newTodo);
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing todos JSON');
    }
  });
});

app.put('/todos/:id', (req, res) => {
  fs.readFile(todosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      const todos = JSON.parse(data);
      const todoIndex = findIndex(todos, parseInt(req.params.id));
      if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
      }
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile(todosFilePath, JSON.stringify(todos), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        res.status(200).json(updatedTodo);
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing todos JSON');
    }
  });
});

app.delete('/todos/:id', (req, res) => {
  fs.readFile(todosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    try {
      let todos = JSON.parse(data);
      const todoIndex = findIndex(todos, parseInt(req.params.id));
      if (todoIndex === -1) {
        return res.status(404).send('Todo not found');
      }
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile(todosFilePath, JSON.stringify(todos), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
        res.status(200).send();
      });
    } catch (parseError) {
      console.error(parseError);
      res.status(500).send('Error parsing todos JSON');
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
