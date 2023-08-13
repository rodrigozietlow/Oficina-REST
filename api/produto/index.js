const controllerProdutos = require("./mocks");

module.exports = (server) => {
  // listar produtos
  server.get("/produto", (req, res) => {
    res.status(200).send(controllerProdutos.listarProdutos());
  });

  // listar o produto
  server.get("/produto/:idProduto", (req, res) => {
    const produtoEncontrado = controllerProdutos.buscarProduto(
      req.params.idProduto
    );
    if (produtoEncontrado) res.status(200).send(produtoEncontrado);
    else res.status(404).send({ error: "Produto não encontrado" });
  });
};
