const produtos = [
  {
    id: 1,
    nome: "Eu, Robô",
    valor: 17.5,
  },
  {
    id: 2,
    nome: "Duna",
    valor: 23.6,
  },
  {
    id: 3,
    nome: "Fahrenheit 451",
    valor: 12.8,
  },
];

exports.listarProdutos = () => produtos;
exports.buscarProduto = (id) => produtos.find((produto) => produto.id == id);
exports.adicionarProduto = (produto) => {
  if (
    produto.id ||
    produtos.find((produtoExistente) => produtoExistente.nome == produto.nome)
  ) {
    return false;
  }

  produtos.push(produto);
  return true;
};
