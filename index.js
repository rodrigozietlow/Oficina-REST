const express = require("express");
const app = express();
const port = 3000;
const apiProdutos = require("./api/produto/index");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Raiz da API. Idealmente aqui tem apenas roteamento para outras partes da API"
    );
});

apiProdutos(app); // adiciona os endpoints que criarmos dentro da pasta de produto

app.listen(port, () => {
  console.log(`Server up, porta ${port}`);
});
