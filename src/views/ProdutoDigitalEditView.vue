<script>
import ProdutoDigitalDataService from "@/services/ProdutoDigitalDataService";
import ProdutoDigitalRequest from "../models/ProdutoDigitalRequest";
import ProdutoDigitalResponse from "../models/ProdutoDigitalResponse";
import { RouterLink } from "vue-router";
import { useCookies } from "vue3-cookies";
import Cabecalho from "../components/Cabecalho.vue";

export default {
  components: { Cabecalho },

  data() {
    return {
      produtoDigitalRequest: new ProdutoDigitalRequest(),
      produtoDigitalResponse: new ProdutoDigitalResponse(),

      produtoDigitalRequest: {
        id: null,
        nome: "",
        descricao: "",
        valor: 0,
        dataLimite: "",
        urlDownload: "",
      },
    };
  },
  created() {
    this.carregarProduto();
  },
  methods: {
    async carregarProduto() {
      try {
        const produtoId = this.$route.params.id;

        console.log(produtoId);
        this.produto = await ProdutoDigitalDataService.buscarPorId(produtoId);
        console.log(this.produto);
      } catch (error) {
        console.error(error);
      }
    },
    salvar() {
      if (this.produtoDigitalRequest.id) {
        ProdutoDigitalDataService.alteraProdutoDigital(
          this.produtoDigitalRequest.id,
          this.produtoDigitalRequest
        )
          .then((resposta) => {
            this.produtoDigitalResponse = resposta;
            this.$router.push({ name: "listagem-produto-simples" });
          })
          .catch((erro) => {
            console.log(erro);
          });
      }
    },
  },
};
</script>


<template>
  <Cabecalho />

  <div class="cadastro-container">
    <div class="cadastro-card">
      <h2>Editar Produto Digital</h2>
      <form>
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            v-model="produtoDigitalRequest.nome"
            type="text"
            id="nome"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="descricao">Descrição</label>
          <textarea
            v-model="produtoDigitalRequest.descricao"
            id="descricao"
            class="form-control"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            v-model="produtoDigitalRequest.valor"
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
            v-model="produtoDigitalRequest.dataLimite"
            type="date"
            id="dataLimite"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="urlDownload">URL de Download</label>
          <input
            v-model="produtoDigitalRequest.urlDownload"
            type="url"
            id="urlDownload"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="salvar">
          Salvar
        </button>
      </form>
    </div>
  </div>
  <footer class="footer">
    <router-link
      to="/listagem/produto/digital"
      class="footer-link"
      @click="goToHomePage"
      >Voltar</router-link
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
  color: #006400;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.footer {
  margin-top: 20px;
  text-align: center;
}

.footer-link {
  color: #007bff;
  text-decoration: none;
}
</style>

