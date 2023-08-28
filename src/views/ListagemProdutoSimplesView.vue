<script>
import ProdutoSimplesDataService from "../services/ProdutoSimplesDataService";
import Cabecalho from "../components/Cabecalho.vue";

export default {
  components: { Cabecalho },

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
      this.$router.push({ name: "produto-simples-edit", params: { id } });
    },
    async excluirProduto(id) {
      try {
        await ProdutoSimplesDataService.remover(id);
        this.buscarProdutosSimples();
      } catch (error) {
        console.error(error);
      }
    },
    goToHomePage() {
      this.$router.push({ path: "/pagina/inicial" }); 
    },
  },
  created() {
    this.buscarProdutosSimples();
  },
};
</script>
<template>
  <div>
    <Cabecalho />
    <h2 class="titulo">Lista de Produtos Cadastrados</h2>
    <div
      class="produto-card"
      v-for="produto in produtosSimples"
      :key="produto.id"
    >
      <h3>{{ produto.nome }}</h3>
      <p>Descrição: {{ produto.descricao }}</p>
      <p>Valor: {{ produto.valor }}</p>
      <p>Data Limite: {{ produto.dataLimite }}</p>
      <p>Quantidade de Produto: {{ produto.quantidadeDeProduto }}</p>
      <button class="editar" @click="editarProduto(produto.id)">Editar</button>
      <button class="excluir" @click="excluirProduto(produto.id)">Excluir</button>
    </div>
  </div>
  <footer class="footer">
    <router-link to="/" class="footer-link" @click="goToHomePage"
      >Voltar para a página inicial</router-link
    >
  </footer>
</template>


<style>
.editar{
  background-color: green;
}
.excluir{
  background-color: red;
}
.produto-card {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
.titulo {
  text-align: center;
}
.footer {
  margin-top: 20px;
  text-align: center;
}

.footer-link {
  color: #007bff;
  text-decoration: none;
}

/* Outros estilos para a lista de produtos simples */
</style>
