const bibliotecaService = require("./biblioteca.service")

test("Verificar se o nome do livro esta vazio", () => {
  const resultado = bibliotecaService.criarLivro("", "Allan", 2022, "Ficção");
  expect(resultado).toBe("Erro: Nome é obrigatório!");
});

test("Verificar se o autor do livro esta vazio", () => {
  const resultado = bibliotecaService.criarLivro("O Senhor dos Anéis", "", 2022, "Ficção");
  expect(resultado).toBe("Erro: Autor é obrigatório!");
});

test("Verificar se o ano de publicação do livro esta vazio", () => {
  const resultado = bibliotecaService.criarLivro("O Senhor dos Anéis", "Allan", "", "Ficção");
  expect(resultado).toBe("Erro: Ano de publicação é obrigatório!");
});

test("Buscar livro por nome com campo vazio", () => {
  const resultado = bibliotecaService.buscarLivroPorNome("");
  expect(resultado).toBe("Erro: Título é obrigatório para busca");
});

test("Buscar livro por categoria com campo vazio", () => {
  const resultado = bibliotecaService.buscarLivroPorCategoria("");
  expect(resultado).toBe("Erro: Categoria é obrigatória para busca");
});

test("Verificar se o livro foi criado com sucesso", () => {
    const resultado = bibliotecaService.criarLivro("O Senhor dos Anéis", "Allan", 2022, "Ficção");
    expect(resultado).toHaveProperty("id");
    expect(resultado).toHaveProperty("nome", "O Senhor dos Anéis");
    expect(resultado).toHaveProperty("autor", "Allan");
    expect(resultado).toHaveProperty("ano_publicacao", 2022);
    expect(resultado).toHaveProperty("categoria", "Ficção")
});

test("Verificar se a busca por nome está funcionando", () => {
    bibliotecaService.criarLivro("O Senhor dos Anéis", "Allan", 2022, "Ficção");
    const resultado = bibliotecaService.buscarLivroPorNome("O Senhor dos Anéis");
    expect(resultado).toHaveProperty("nome", "O Senhor dos Anéis");
});
