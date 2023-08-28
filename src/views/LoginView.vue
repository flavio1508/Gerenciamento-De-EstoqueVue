<script>
import { RouterLink } from "vue-router";
import { useCookies } from "vue3-cookies";
import AdministradorDataService from "../services/AdministradorDataService";

export default {
  setup() {
  const { cookies } = useCookies();
  return { cookies };
},
methods: {
  async fazerLogin() {
    try {
      const loginInfo = {
        email: this.email,
        senha: this.senha
      };

      const response = await AdministradorDataService.login(loginInfo);

      // Armazenar informações de login em cookies
      this.cookies.set('administrador_id', response.id);
      this.cookies.set('administrador_nome', response.nome);

      // Redirecionar para a página de menu (ou qualquer outra)
      this.$router.push({ name: "pagina-inicial" });
    } catch (error) {
      console.error(error);
    }
  },
  
    cadastrar() {
      // Redirecionar para a página de cadastro de administrador
      this.$router.push({ name: "cadastro-administrador" });
    }
},
};
</script>
<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login</h2>
      <input v-model="email" placeholder="Email" class="input-field" />
      <input v-model="senha" placeholder="Senha" type="password" class="input-field" />
      <button @click="fazerLogin" class="login-button">Entrar</button>
      <button @click="cadastrar" class="criar-button">Criar uma conta</button>
    </div>
  </div>
</template>


<style>
.criar-button{
  background-color: white;
  color: #007bff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: -30px;
  margin-left: 20px;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  background-color: #007bff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
}

.login-button {
  background-color: white;
  color: #007bff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
