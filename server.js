const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());


app.post('/feeds', (req, res) => {
  // Aquí puedes realizar cualquier lógica adicional con los datos recibidos en el cuerpo (req.body)

  // Envía una respuesta exitosa con código de estado 200 y un cuerpo de éxito
  res.status(200).json({ success: true });
});

app.get('/ping', (req, res) => {
    // Aquí puedes realizar cualquier lógica adicional con los datos recibidos en el cuerpo (req.body)
  
    // Envía una respuesta exitosa con código de estado 200 y un cuerpo de éxito
    res.status(200).json("pong");
  });

app.listen(port, () => {
  console.log(`Servidor web escuchando en el puerto ${port}`);
});

