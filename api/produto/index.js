const controllerProdutos = require("./mocks");

module.exports = (server) => {
  // listar produtos
  server.get("/produto", (req, res) => {
    res.send(controllerProdutos.listarProdutos());
  });

  // listar o produto
  server.get("/produto/:idProduto", (req, res) => {
    res.send(controllerProdutos.buscarProduto(req.params.idProduto));
  });
};
