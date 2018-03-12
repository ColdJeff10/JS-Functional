class EstoqueController {
  constructor() {
    this.$render = document.querySelector('[data-js="render"]');
    this.estoque = new Estoque();
    this.listaView = new ListaView();
    this.formularioView = new FormularioView();
  }

  init() {
    this.telaLista();
  };

  telaLista(){
    this.listaView.render(this.$render, this.estoque);
    let btnNovo = document.querySelector('[data-js="novo"]')
    let table = document.querySelector('[data-js="tabela"]')
    btnNovo.addEventListener('click', this.telaCadastro.bind(this));
    table.addEventListener('click', () => {
      if(event.target.textContent !== 'Excluir')
        return;
      this.excluir(event.target.id)();
    });
  };

  telaCadastro(){
    this.formularioView.render(this.$render);
    let btnCadastrar = document.querySelector('[data-js="cadastrar"]');
    btnCadastrar.addEventListener('click', this.cadastrar.bind(this));
  };

  cadastrar(){
    event.preventDefault();
    let $form = document.querySelector('form');
    if(!$form.checkValidity())
      return;

    let produto = this.criarProduto();
    this.estoque.adicionar(produto);
    this.telaLista();
  };

  criarProduto(){
    let $id = document.querySelector('[data-js="id"]');
    let $nome = document.querySelector('[data-js="nome"]');
    let $valor = document.querySelector('[data-js="valor"]');
    let $quantidade = document.querySelector('[data-js="quantidade"]');
    return new Produto($id.value, $nome.value, $valor.value, $quantidade.value);
  };

  excluir($id){
    this.estoque.excluir($id)
    return this.telaLista.bind(this);
  };

}
