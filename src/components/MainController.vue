<template>
    <div>
        <Header />
        <div class="content">
            <component :is="page" />
        </div>
        <Footer />
    </div>

</template>

<script>

// import header and footer components
import Header from './base/Header.vue';
import Footer from './base/Footer.vue';

import Home from './pages/Home.vue';

export default {
    name: 'MainController',
    components: {
        Header,
        Footer,
        Home
    },
    data() {
        return {
            user: null,
            role: null,
            images: [],
            page: "Home"
        }
    },
    methods: {
        showSmallMenu() {
            document.getElementById('small-menu').classList.toggle('small-menu-hidden');
        },
        log_out_click() {
            window.location = '/logout';
        },
        sign_in_click() {
            window.location = '/login';
        }
    }
}
</script>