<template>
  <div>
    <h2>Lista de Produtos Simples Cadastrados</h2>
    <div class="produto-card" v-for="produto in produtosSimples" :key="produto.id">
      <h3>{{ produto.nome }}</h3>
      <p>Descrição: {{ produto.descricao }}</p>
      <p>Valor: {{ produto.valor }}</p>
      <p>Data Limite: {{ produto.dataLimite }}</p>
      <p>Quantidade de Produto: {{ produto.quantidadeDeProduto }}</p>
      <button @click="editarProduto(produto.id)">Editar</button>
      <button @click="excluirProduto(produto.id)">Excluir</button>
    </div>
  </div>
</template>

<script>
import ProdutoSimplesDataService from "../services/ProdutoSimplesDataService";

export default {
  data() {
    return {
      produtosSimples: [],
    };
  },
  methods: {
    async buscarProdutosSimples() {
      try {
        const produtosSimples = await ProdutoSimplesDataService.buscarTodos();
        this.produtosSimples = produtosSimples;
      } catch (error) {
        console.error(error);
      }
    },
    editarProduto(id) {
      // Redirecionar para a página de edição com o ID do produto simples
      this.$router.push({ name: "editar-produto-simples", params: { id } });
    },
    async excluirProduto(id) {
      try {
        // Realizar a exclusão do produto simples
        await ProdutoSimplesDataService.remover(id);
        // Atualizar a lista de produtos simples
        this.buscarProdutosSimples();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.buscarProdutosSimples();
  },
};
</script>

<style>
.produto-card {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}

/* Outros estilos para a lista de produtos simples */
</style>
