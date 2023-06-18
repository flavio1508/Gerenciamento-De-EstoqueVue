<script>
import { RouterView } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  data() {
    return {
      technologies: [
        { id: 1, name: 'Java', image: 'java.png' },
        { id: 2, name: 'JavaScript', image: 'javascript.png' },
        { id: 3, name: 'React', image: 'react.png' },
        { id: 4, name: 'TypeScript', image: 'typescript.png' },
        { id: 5, name: 'Node.js', image: 'nodejs.png' },
        { id: 6, name: 'Python', image: 'python.png' },
        { id: 7, name: 'Vue.js', image: 'vuejs.png' },
        { id: 8, name: 'Figma', image: 'figma.png' },
        { id: 9, name: 'Scrum', image: 'scrum.png' },
        { id: 10, name: 'HTML', image: 'html.png' },
        { id: 11, name: 'CSS', image: 'css.png' },
        { id: 12, name: 'Spring Boot', image: 'spring-boot.png' },
        { id: 13, name: 'API', image: 'api.png' },
        { id: 14, name: 'Metodologias Ágeis', image: 'agile.png' },
      ],
    };
  },
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
      <div class="container">
        <h1>Tecnologias</h1>
        <div class="card-container">
          <div class="card" v-for="technology in technologies" :key="technology.id">
            <img :src="technology.image" :alt="technology.name" />
            <h3>{{ technology.name }}</h3>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style>
.container h1 {
  margin-top: 10%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.card {
  width: 28%; /* Ajuste a largura dos cards para acomodar 4 por linha */
  padding: 20px;
  margin: 15px;
  background-color: #f1f1f1;
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
}
</style>