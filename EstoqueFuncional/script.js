(function(doc, win){
  'use strict'

// Dados Iniciais
  const $RENDER = doc.querySelector('[data-js="render"]');
  let estoque = [];

  init();

  function init(){
    telaLista();
  };

// Tela da Listagem
  function lista(){
    return(
      `
        <button data-js="novo" class="btn btn-primary">Novo</button>
        <table class="table table-hover">
          <thead>
            <tr class="table-secondary">
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody data-js="tabela">
            ${estoque.map((produto) => (`
              <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.valor}</td>
                <td>${produto.quantidade}</td>
                <td><a href="#" id="${produto.id}">Excluir</a></td>
              </tr>
            `)).join('')}
          </tbody>
          <tfoot class="">
            <tr class="table-secondary font-weight-bold">
              <td>Total (R$): </td>
              <td colspan="4" class="text-right">${estoque.reduce((total, produto) => total + produto.valor * produto.quantidade, 0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      `
    )
  };

  function telaCadastro(){
    $RENDER.innerHTML = formulario()
    let btnCadastrar = doc.querySelector('[data-js="cadastrar"]')
    btnCadastrar.addEventListener('click', cadastrar)
  };

// Tela do Formulario
  function formulario(){
    return(
      `
        <form>
          <div class="form-group">
            <label for="id">Id</label>
            <input data-js="id" type="text" placeholder="Digite o id" id="id" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="nome">Nome</label>
            <input data-js="nome" type="text" placeholder="Digite o nome do produto" id="nome" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="valor">Valor(R$)</label>
            <input data-js="valor" type="text" placeholder="Digite o valor" id="valor" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="quantidade">Quantidade</label>
            <input data-js="quantidade" type="text" placeholder="Digite a quantidade" id="quantidade" class="form-control" required>
          </div>
          <button type="submit" data-js="cadastrar" class="btn btn-success">Cadastrar</button>
        </form>
      `
    )
  };

  function cadastrar(){
    event.preventDefault()
    let $form = doc.querySelector('form')
    if(!$form.checkValidity())
      return

    let produto = criarProduto()
    estoque.push(produto)
    telaLista()
  };

  function criarProduto(){
    let $id = doc.querySelector('[data-js="id"]')
    let $nome = doc.querySelector('[data-js="nome"]')
    let $valor = doc.querySelector('[data-js="valor"]')
    let $quantidade = doc.querySelector('[data-js="quantidade"]')
    return produto($id.value, $nome.value, $valor.value, $quantidade.value)
  };

  function produto(id, nome, valor, quantidade){
    let produto = {
      id: parseInt(id),
      nome: nome,
      valor: parseFloat(valor),
      quantidade: parseInt(quantidade)
    };
    return produto
  };

  function telaLista(){
    $RENDER.innerHTML = lista()
    let btnNovo = doc.querySelector('[data-js="novo"]')
    let table = doc.querySelector('[data-js="tabela"]')
    btnNovo.addEventListener('click', telaCadastro)
    table.addEventListener('click', () => {
      if(event.target.textContent !== 'Excluir')
        return;
      excluir(event.target.id)()
    })
  };

  function excluir($id){
    let indice = estoque.indexOf(estoque.find((produto) => produto.id == $id));
    estoque.splice(indice, 1)
    return telaLista
  };

})(document, window)
