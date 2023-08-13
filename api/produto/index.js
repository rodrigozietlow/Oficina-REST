const produtos = require("./mocks").produtos;

const listarProdutos = () => produtos;
const buscarProduto = (id) => produtos.find((produto) => produto.id == id);

module.exports = (server) => {
  // listar produtos
  server.get("/produto", (req, res) => {
    res.send(listarProdutos());
  });

  // listar o produto
  server.get("/produto/2", (req, res) => {
    res.send(buscarProduto(2));
  });
};
