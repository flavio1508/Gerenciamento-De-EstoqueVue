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
            <div>
                <h2>Redes Sociais</h2>
                <ul>
                    <li>
                        <a :href="linkedinLink" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a :href="twitterLink" target="_blank">Twitter</a>
                    </li>
                    <li>
                        <a :href="instagramLink" target="_blank">Instagram</a>
                    </li>
                </ul>
            </div>
        </main>
        <Footer/>

    </div>
</template>