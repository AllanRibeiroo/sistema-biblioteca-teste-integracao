const livros = [];

/**
 * ID: NÚMERO (INT)
 * NOME: TEXTO (STRING)
 * AUTOR: TEXTO (STRING)
 * ANO_PUBLICACAO: NÚMERO (INT)
 * CATEGORIA: TEXTO (STRING)
 */

/**
 * INSERT
 * SELECT
 * SELECT com WHERE
 */

function criarLivro(nome, autor, anoPublicacao, categoria) {
  const novoLivro = {
    id: Date.now(),
    nome: nome,
    autor: autor,
    ano_publicacao: anoPublicacao,
    categoria: categoria || "GERAL",
  };

  livros.push(novoLivro);

  return novoLivro;
}

function listarTodosLivros() {
  return livros;
}

function buscarLivroPorNome(nome) {
  const filtrarLivro = livros.find((livro) => livro.nome === nome);

  return filtrarLivro;
}

function buscarLivroPorCategoria(categoria) {
  const filtrarLivro = livros.find((livro) => livro.categoria === categoria);

  return filtrarLivro;
}

module.exports = {
  criarLivro,
  listarTodosLivros,
  buscarLivroPorNome,
  buscarLivroPorCategoria,
}; 