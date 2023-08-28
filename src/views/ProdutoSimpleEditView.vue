<script>
import ProdutoSimplesDataService from "@/services/ProdutoSimplesDataService";
import ProdutoSimplesRequest from "../models/ProdutoSimplesRequest";
import ProdutoSimplesResponse from "../models/ProdutoSimplesResponse";
import Cabecalho from "../components/Cabecalho.vue";

export default {
    components: { Cabecalho },

  data() {
    return {
      produtoSimplesRequest: new ProdutoSimplesRequest(),
      produtoSimplesResponse: new ProdutoSimplesResponse(),
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
        this.produtoSimplesRequest = await ProdutoSimplesDataService.buscarPorId(produtoId);
        console.log(this.produtoSimplesRequest);
      } catch (error) {
        console.error(error);
      }
    },
    salvar() {
      if (this.produtoSimplesRequest.id) {
        ProdutoSimplesDataService.alteraProdutoSimples(
          this.produtoSimplesRequest.id,
          this.produtoSimplesRequest
        )
          .then((resposta) => {
            this.produtoSimplesResponse = resposta;
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
      <h2>Editar Produto Simples</h2>
      <form @submit.prevent="salvar">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            v-model="produtoSimplesRequest.nome"
            type="text"
            id="nome"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="descricao">Descrição</label>
          <textarea
            v-model="produtoSimplesRequest.descricao"
            id="descricao"
            class="form-control"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="valor">Valor</label>
          <input
            v-model="produtoSimplesRequest.valor"
            type="number"
            step="0.01"
            id="valor"
            class="form-control"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">Salvar</button>
      </form>
    </div>
  </div>
    <footer class="footer">
    <router-link
      to="/listagem/produto/simples"
      class="footer-link"
      @click="goToHomePage"
      >Voltar</router-link
    >
  </footer>
</template>


<style scoped>
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
.footer {
  margin-top: 20px;
  text-align: center;
}

.footer-link {
  color: #007bff;
  text-decoration: none;
}
</style>

