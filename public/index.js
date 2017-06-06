const socket = io();

socket.on('connect', () => {
  console.log('socket.io connected');

});

socket.on('disconnect', () => {
  console.warn('socket.io disconnected');
});

socket.on('newMessage', (msg) => {
  console.log('newMessage', msg);
});
