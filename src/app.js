const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const STATUS_USER_ERROR = 422;

const server = express();
// to enable parsing of json bodies for post requests
server.use(bodyParser.json());

/* Returns a list of dictionary words from the words.txt file. */
const readWords = () => {
  const contents = fs.readFileSync('words.txt', 'utf8');
  return contents.split('\n');
};
// TODO: your code to handle requests

server.get('/greet-me', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

server.get('/', (req, res) => {
  res.send('<h1>Home page</h1>');
});

server.get('/bigger-file', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, contents) => {
    if (err) {
      throw err;
    }
    res.send(contents);
  });
});

server.get('/lesson-plan', (req, res) => {
  const lessonPlan = {
    title: 'Node.js and Express',
    tagline: 'Server-side JavaScript'
    // ...
  };

  // res.set('Content-type', 'application/json');
  // res.type('json');
  // res.send(JSON.stringify(lessonPlan));

  res.json(lessonPlan);
});

server.listen(3000);


// JSON = JavaScript Object Notation
// A way to represent a JS object as a string
// Convert object to string - "serialization"
// Convert stirng back to ojbect - "deserialization"
// JSON.stringify(object)
// Example: JSON.stringify({ a: 3}) -> '{"a":3}'
// const str = JSON.stringify({ a: 3})
// JSON.parse(str) -> { a: 3 }
