const path = require('path');
const htpp = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
// allow us to use socket.io
const server = htpp.createServer(app);
// socketIO
const io = socketIO(server);

const PORT = process.env.PORT || 3000
const PUBLIC_PATH = path.join(__dirname, '../public');

// express static middleware
app.use(express.static(PUBLIC_PATH))


io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newMessage', {
    from:'Admin',
    text: 'Welcome to the chat app',
  });

  socket.broadcast.emit('newUserJoined',{
    from: 'Admin',
    text: 'New user joined',

  });

  socket.on('createMessage', (message) => {
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('one client was disconnected');
  })
});


server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});