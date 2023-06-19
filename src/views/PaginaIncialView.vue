<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>
<template>
  <div>
    <Header/>
    <main>
      <section class="hero">
        <div class="container">
          <h1>Olá, sou o Flávio Augusto</h1>
          <p>Desenvolvedor Full Stack</p>
          <a class="btn" href="Curriculo Desenvolvedor.pdf" download>Baixar Currículo</a>
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<style>
.btn {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 4px;
  transition: background 0.3s;
  margin-left: -32%;
}

.btn:hover {
  background: #555;
}
/* Estilos para a seção hero */
.hero {
  text-align: center;
  padding: 100px 0;
  margin-left: -100%;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 40px;
  margin-left: -24%;
}

.hero img {
  width: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}
</style>
