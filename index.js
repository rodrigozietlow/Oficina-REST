const express = require("express");
const app = express();
const port = 3000;
const apiProdutos = require("./api/produto/index");

app.get("/", (req, res) => {
  res.send(
    "Raiz da API. Idealmente aqui tem apenas roteamento para outras partes da API"
  );
});

apiProdutos(app); // adiciona os endpoints que criarmos dentro da pasta de produto

app.listen(port, () => {
  console.log(`Server up, porta ${port}`);
});
