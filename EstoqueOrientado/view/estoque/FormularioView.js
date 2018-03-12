class FormularioView {
  view() {
    return (
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
    );
  };

  render(elemento) {
    elemento.innerHTML = this.view();
  };

}
