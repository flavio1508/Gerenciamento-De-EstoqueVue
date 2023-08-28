import http from '../http-commons';

class ProdutoSimplesDataService {
  async cadastrar(produtoSimples) {
    let resposta = await http.post('/produtosSimples', produtoSimples);
    return resposta.data;
  }

  async buscarTodos() {
    let resposta = await http.get('/produtosSimples');
    return resposta.data;
  }

  async buscarPorId(id) {
    let resposta = await http.get(`/produtosSimples/${id}`);
    return resposta.data;
  }

  async alteraProdutoSimples(id, produtoSimples) {
    let resposta = await http.put(`/produtosSimples/${id}`, produtoSimples);
    return resposta.data;
  }

  async buscarPeloIdAdministrador(id) {
    let resposta = await http.get(`/produtosSimples/administrador/${id}/produtosSimples`);
    return resposta.data;
  }

  async remover(id) {
    await http.delete(`/produtosSimples/${id}`);
  }
}

export default new ProdutoSimplesDataService();