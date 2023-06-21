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
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                </div>
            </div>
        </main>
        <Footer />

    </div>
</template>
<style>
.btn-primary {
    /* margin-left:; */
}
</style>