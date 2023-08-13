const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "Raiz da API. Idealmente aqui tem apenas roteamento para outras partes da API"
  );
});

app.listen(port, () => {
  console.log(`Server up, porta ${port}`);
});
