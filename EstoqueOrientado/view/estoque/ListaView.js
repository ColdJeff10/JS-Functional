class ListaView {
  view(estoque) {
    return (
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
            ${estoque.produtos.map((produto) => (`
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
              <td colspan="4" class="text-right">${estoque.produtos.reduce((total, produto) => total + produto.valor * produto.quantidade, 0).toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      `
    );
  };

  render(elemento, estoque) {
    elemento.innerHTML = this.view(estoque);
  };

}
