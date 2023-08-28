<template>
  <div>
    <h2 class="titulo">Lista de Produtos Cadastrados</h2>
    <div class="produto-card" v-for="produto in produtos" :key="produto.id">
      <h3>{{ produto.nome }}</h3>
      <p>Descrição: {{ produto.descricao }}</p>
      <p>Valor: {{ produto.valor }}</p>
      <p>Data Limite: {{ produto.dataLimite }}</p>
      <p>
        URL de Download:
        <a :href="produto.urlDownload" target="_blank">{{ produto.urlDownload }}</a>
      </p>
      <button @click="editarProduto(produto.id)">Editar</button>
      <button @click="excluirProduto(produto.id)">Excluir</button>
    </div>
  </div>
</template>

<script>
import ProdutoDigitalDataService from "../services/ProdutoDigitalDataService";

export default {
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    async buscarProdutos() {
      try {
        const produtos = await ProdutoDigitalDataService.buscarTodos();
        this.produtos = produtos;
      } catch (error) {
        console.error(error);
      }
    },
    editarProduto(id) {
      // Redirecionar para a página de edição com o ID do produto
      this.$router.push({ name: "editar-produto", params: { id } });
    },
    async excluirProduto(id) {
      try {
        // Realizar a exclusão do produto
        await ProdutoDigitalDataService.remover(id);
        // Atualizar a lista de produtos
        this.buscarProdutos();
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.buscarProdutos();
  },
};
</script>

<style>
.produto-card {
  background-color: #007bff; /* Altere a cor aqui para azul (#007bff) */
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.titulo{
    text-align: center;
}

/* Outros estilos para a lista de produtos */
</style>
