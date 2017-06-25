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
const DIST_PATH =  path.join(__dirname, './../dist');

// express static middleware
app.use('/dist', express.static(DIST_PATH));

app.get('/', function(req, res) {
  res.sendFile(path.join(DIST_PATH + '/index.html'));
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