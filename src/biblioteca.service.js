
const bibliotecaModel = require("./biblioteca.model");

function criarLivro(nome, autor, anoPublicacao, categoria) {
  // Quando NOME não estiver preenchido, ele entra no if
  if (!nome) {
    return "Erro: Nome é obrigatório!";
  }

  // Quando AUTOR não estiver preenchido, ele entra no if
  if (!autor) {
    return "Erro: Autor é obrigatório!";
  }

  // Quando ANO PUBLICAÇÃO não estiver preenchido, ele entra no if
  if (!anoPublicacao) {
    return "Erro: Ano de publicação é obrigatório!";
  }

  const novoLivro = bibliotecaModel.criarLivro(nome, autor, anoPublicacao, categoria)

  return novoLivro;
}

function listarLivros() {
  return bibliotecaModel.buscarTodosOsLivros();
}

function buscarLivroPorNome(titulo) {
  if (!titulo) {
    return "Erro: Título é obrigatório para busca";
  }

  return bibliotecaModel.buscarLivroPorNome(titulo);
}

function buscarLivroPorCategoria(categoria) {
  if (!categoria) {
    return "Erro: Categoria é obrigatória para busca";
  }

  return bibliotecaModel.buscarLivroPorCategoria(categoria);
}

module.exports = {
  criarLivro,
  listarLivros,
  buscarLivroPorNome,
  buscarLivroPorCategoria
}
 