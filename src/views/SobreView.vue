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
        <Header/>
        <main>
            <div class="logo">
                <img src="logo.png" alt="F">
            </div>
            <div>
                <p>Eu me chamo Flávio, sou desenvolvedor</p>
            </div>
        </main>
        <Footer/>

    </div>
</template>