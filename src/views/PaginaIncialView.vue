<script>
import { RouterLink } from "vue-router";
import { useCookies } from "vue3-cookies";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Cabecalho from "../components/Cabecalho.vue";
export default {
  components: {
    Cabecalho, 
  },
  setup() {
    const { cookies } = useCookies();
    const nomeLogado = cookies.get("administrador_nome"); 

    return { nomeLogado };
  },
  methods: {
    irParaCadastroDigital(tipo) {
      this.$router.push({ name: "cadastro-produto-digital", params: { tipo } });
    },
    irParaCadastroSimples(tipo) {
      this.$router.push({ name: "cadastro-produto-simples", params: { tipo } });
    },
    irParaListagemDigital(tipo) {
      this.$router.push({ name: "listagem-produto-digital", params: { tipo } });
    },
    irParaListagemSimples(tipo) {
      this.$router.push({ name: "listagem-produto-simples", params: { tipo } });
    },
    goToHomePage() {
      this.$router.push({ path: "/" }); 
    },
  },
};
</script>
<template>
    <Cabecalho/>
  <div class="container text-center">
    <h2>Olá, {{ nomeLogado }}</h2>
    <div class="row">
      <div class="col-md-6 mb-3">
        <div class="card card-blue" @click="irParaCadastroDigital">
          <h2 class="card-title">Cadastrar Produto Digital</h2>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <div class="card card-blue" @click="irParaCadastroSimples">
          <h2 class="card-title">Cadastrar Produto Simples</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="card card-blue" @click="irParaListagemDigital">
          <h2 class="card-title">Listagem de Produtos Digitais</h2>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card card-blue" @click="irParaListagemSimples">
          <h2 class="card-title">Listagem de Produtos Simples</h2>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <router-link to="/" class="footer-link" @click="goToHomePage"
      >Voltar para a login</router-link
    >
  </footer>
</template>


<style scoped>
.card {
  border: none;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.card-blue {
  background-color: #007bff;
  color: white;
}

.card-blue:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.card-blue:active {
  transform: scale(0.98);
}
.cabecalhos {
  padding: 20px;
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