const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const PUBLIC_PATH = path.join(__dirname, '../public');

app.use(express.static(PUBLIC_PATH))

console.log(PUBLIC_PATH);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});