const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


app.post('/feeds', (req, res) => {
  res.status(200).json({ success: true });
});

app.get('/ping', (req, res) => {
    res.status(200).json("pong");
  });

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});

