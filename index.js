const express = require('express');


const app = express();
app.use(express.static('static'))

app.get('/', (req, res) => {
  res.contentType("html")
  res.sendFile("./views/index.html", {root: __dirname})
});

app.listen(3000, () => {
  console.log('server started');
});