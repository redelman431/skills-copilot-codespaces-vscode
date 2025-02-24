// Create web server
// Create a web server that listens to incoming requests and sends back a response.
// The server should respond to a request to /comments with an array of comments.
// The server should respond to a request to /comments/new with a message.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const comments = [
  { username: 'Todd', comment: 'lol that is so funny I love it!' },
  { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
  { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
  { username: 'onlysayswoof', comment: 'woof woof woof' },
];

app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

app.get('/comments/new', (req, res) => {
  res.send('This is the new comments route.');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});