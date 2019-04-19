const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '../public');
const app = express();

app.use(express.static(publicPath));

// Since we don't have backend routes, we are using front end routing, so send the index.html for all unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up and running at port 3000');
});