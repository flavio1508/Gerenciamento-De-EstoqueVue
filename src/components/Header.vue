<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>
<template>
  <header>
    <nav>
      <div class="logo">
        <img src="logo.png" alt="Logo">
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul :class="{ 'active': isMenuOpen }">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/sobre">Sobre</RouterLink>
        </li>
        <li>
          <RouterLink to="/habilidades">Habilidades</RouterLink>
        </li>
        <li>
          <RouterLink to="/projetos">Projetos</RouterLink>
        </li>
        <li>
          <RouterLink to="/contato">Contato</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
/* Estilos para o cabeçalho responsivo */
header {
  background: #333;
  color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.menu-toggle {
  display: none;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 3px;
  background: #fff;
  margin-bottom: 5px;
}

/* Estilos para o conteúdo responsivo */
@media (max-width: 768px) {
  /* ...código para o menu hamburger e outros estilos responsivos... */
}</style>
