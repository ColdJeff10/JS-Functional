class Estoque {
  constructor() {
    this.produtos = [];
  };

  adicionar(produto) {
    this.produtos.push(produto);
  };

  excluir(id) {
    let indice = this.produtos.indexOf(this.produtos.find((produto) => produto.id == id));
    this.produtos.splice(indice, 1);
  };

}
