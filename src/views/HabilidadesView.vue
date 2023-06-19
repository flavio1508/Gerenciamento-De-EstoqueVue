<script>
import { RouterView } from 'vue-router';
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
    <Header />
    <main>
      <div class="titulo">
        <h1>Tecnologias</h1>
        <div class="card-tudo">
          <div class="card">
            <img src="" alt="">
            <h3>Java</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>JavaScript</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>React js/ts</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Node.js</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Python</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Vue.js</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Scrum</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Figma</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>HTML</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>CSS</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Spring Boot</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>API</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Java</h3>
          </div>
          <div class="card">
            <img src="" alt="">
            <h3>Metodologias Ágeis</h3>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>


<style>
.titulo h1 {
  margin-top: 10%;
  margin-left: 85%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.card-tudo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  margin-left: 50%;
  width: 100%;

}

.card {
  width: 22%;
  /* Ajuste a largura dos cards para acomodar 4 por linha */
  padding: 10px;
  /* margin-left: 5%; */
  margin: 15px;
  background-color: #201e1e;
  border-radius: 4px;
}

.card img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
}

.card h3 {
  margin-top: 10px;
  color: rgb(156, 65, 247);
}
</style>