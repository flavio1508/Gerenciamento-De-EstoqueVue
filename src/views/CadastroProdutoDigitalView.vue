<script>
import { useCookies } from "vue3-cookies";
import ProdutoDigitalDataService from "../services/ProdutoDigitalDataService";
import ProdutoDigitalRequest from "../models/ProdutoDigitalRequest";
import { RouterLink } from "vue-router";
import Cabecalho from "../components/Cabecalho.vue";

export default {
  components: { Cabecalho },

  data() {
    return {
      produto: {
        nome: "",
        descricao: "",
        valor: 0,
        dataLimite: "",
        urlDownload: "",
      },
    };
  },
  methods: {
    async cadastrarProduto() {
      try {
        const { cookies } = useCookies();
        const idDoAdministrador = cookies.get("administrador_id"); 

        const produtoRequest = new ProdutoDigitalRequest();
        produtoRequest.idDoAdministrador = idDoAdministrador;
        produtoRequest.nome = this.produto.nome;
        produtoRequest.descricao = this.produto.descricao;
        produtoRequest.valor = this.produto.valor;
        produtoRequest.dataLimite = this.produto.dataLimite;
        produtoRequest.urlDownload = this.produto.urlDownload;

        const response = await ProdutoDigitalDataService.cadastrar(
          produtoRequest
        );

        this.$router.push({ name: "pagina-inicial" });
      } catch (error) {
        console.error(error);
      }
    },
    goToHomePage() {
      this.$router.push({ path: "/pagina/inicial" }); 
    },
  },
};
</script>
<template>
  <Cabecalho />
  <div class="cadastro-container">
    <div class="cadastro-card">
      <h2>Cadastrar Produto Digital</h2>
      <form @submit.prevent="cadastrarProduto">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            v-model="produto.nome"
            type="text"
            id="nome"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="descricao">Descrição</label>
          <textarea
            v-model="produto.descricao"
            id="descricao"
            class="form-control"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            v-model="produto.valor"
            type="number"
            step="0.01"
            id="valor"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="dataLimite">Data Limite</label>
          <input
            v-model="produto.dataLimite"
            type="date"
            id="dataLimite"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="urlDownload">URL de Download</label>
          <input
            v-model="produto.urlDownload"
            type="url"
            id="urlDownload"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  </div>
  <footer class="footer">
    <router-link to="/" class="footer-link" @click="goToHomePage"
      >Voltar para a página inicial</router-link
    >
  </footer>
</template>


<style scoped>
.footer {
  margin-top: 20px;
  text-align: center;
}

.footer-link {
  color: #007bff;
  text-decoration: none;
}
.cadastro-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.cadastro-card {
  background-color: #007bff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background-color: white;
  color: blue;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
