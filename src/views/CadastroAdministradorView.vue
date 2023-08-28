<script>
import AdministradorDataService from "../services/AdministradorDataService";
import Cabecalho from "../components/Cabecalho.vue";

export default {
  components: { Cabecalho },

  data() {
    return {
      administrador: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    async cadastrarAdministrador() {
      try {
        const response = await AdministradorDataService.cadastrar(
          this.administrador
        );

        this.$router.push({ name: "login" });
      } catch (error) {
        console.error(error);
      }
    },
    goToHomePage() {
      this.$router.push({ path: "/" }); 
    },
  },
};
</script>
<template>
  <Cabecalho />

  <div class="cadastro-container">
    <div class="cadastro-card">
      <h2>Cadastrar Administrador</h2>
      <form @submit.prevent="cadastrarAdministrador">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input
            v-model="administrador.nome"
            type="text"
            id="nome"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="administrador.email"
            type="email"
            id="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            v-model="administrador.senha"
            type="password"
            id="senha"
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
      >Voltar para a login</router-link
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
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
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
