const produtos = require("./mocks").produtos;

module.exports = (server) => {
  server.get("/produto", (req, res) => {
    res.send(produtos);
  });
};
