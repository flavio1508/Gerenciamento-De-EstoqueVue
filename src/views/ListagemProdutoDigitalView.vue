<script>
import Cabecalho from "../components/Cabecalho.vue";
import ProdutoDigitalDataService from "../services/ProdutoDigitalDataService";

export default {
  components: { Cabecalho },
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
      console.log(id);
      this.$router.push({ name: "produto-digital-edit", params: { id } });
      console.log(this.$router);
    },
    async excluirProduto(id) {
      try {
        await ProdutoDigitalDataService.remover(id);
        this.buscarProdutos();
      } catch (error) {
        console.error(error);
      }
    },
    goToHomePage() {
      this.$router.push({ path: "/pagina/inicial" });
    },
  },
  created() {
    this.buscarProdutos();
  },
};
</script>
<template>
  <div>
    <Cabecalho />
    <h2 class="titulo">Lista de Produtos Cadastrados</h2>
    <div class="produto-card" v-for="produto in produtos" :key="produto.id">
      <h3>{{ produto.nome }}</h3>
      <p>Descrição: {{ produto.descricao }}</p>
      <p>Valor: {{ produto.valor }}</p>
      <p>Data Limite: {{ produto.dataLimite }}</p>
      <p>
        URL de Download:
        <a :href="produto.urlDownload" target="_blank">{{
          produto.urlDownload
        }}</a>
      </p>
      <button @click="editarProduto(produto.id)">Editar</button>
      <button @click="excluirProduto(produto.id)">Excluir</button>
    </div>
  </div>
  <footer class="footer">
    <router-link to="/" class="footer-link" @click="goToHomePage"
      >Voltar para a página inicial</router-link
    >
  </footer>
</template>


<style>
.produto-card {
  background-color: #007bff; /* Altere a cor aqui para azul (#007bff) */
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

/* Outros estilos para a lista de produtos */
</style>
