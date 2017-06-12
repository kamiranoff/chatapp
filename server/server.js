const path = require('path');
const htpp = require('http');
const express = require('express');
const socketIO = require('socket.io');

const { generateMessage } = require('./utils/message');

const app = express();
// allow us to use socket.io
const server = htpp.createServer(app);
// socketIO
const io = socketIO(server);

const PORT = process.env.PORT || 3100
const PUBLIC_PATH = path.join(__dirname, './../public');
const DIST_PATH =  path.join(__dirname, './../build');

// express static middleware
app.use('/build',express.static(DIST_PATH));
app.use(express.static(PUBLIC_PATH));

app.get('/timeout', function (req, res) {
  console.log('here');
});

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newUserJoined', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    if (typeof callback === 'function') {
      callback('Server got you.');
    }
  });

  socket.on('disconnect', () => {
    console.log('one client was disconnected');
  })
});


server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});