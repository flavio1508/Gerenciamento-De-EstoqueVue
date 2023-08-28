import http from '../http-commons';

class ProdutoDigitalDataService {
  async cadastrar(produtoDigital) {
    let resposta = await http.post('/produtosDigitais', produtoDigital);
    return resposta.data;
  }

  async buscarTodos() {
    let resposta = await http.get('/produtosDigitais');
    return resposta.data;
  }

  async buscarPorId(id) {
    let resposta = await http.get('/produtosDigitais/'+ id);
    return resposta.data;
  }

  async alteraProdutoDigital(id, produtoDigital) {
    let resposta = await http.put(`/produtosDigitais/`+ id, produtoDigital);
    return resposta.data;
  }

  async buscarPeloIdAdministrador(id) {
    let resposta = await http.get(`/produtosDigitais/administrador/${id}/produtosDigitais`);
    return resposta.data;
  }

  async remover(id) {
    await http.delete(`/produtosDigitais/` + id);
  }
}

export default new ProdutoDigitalDataService();