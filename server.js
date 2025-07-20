const express = require('express');
const path = require('path');
const publicDir = path.join(__dirname, 'public');

const app = express();
app.use(express.static(publicDir));

// Redirect root or blank to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Raqkid Speedtest running on http://localhost:${PORT}`);
});
