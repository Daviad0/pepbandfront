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
import Events from './pages/Events.vue';
import Songs from './pages/Songs.vue';
import Account from './pages/Account.vue';
import AlternateLogin from './pages/AlternateLogin.vue';
import Config from './pages/Config.vue';
import Event from './pages/Event.vue';

export default {
    name: 'MainController',
    components: {
        Header,
        Footer,
        Home,
        Events,
        Config,
        Event,
        Songs,
        Account,
        AlternateLogin
    },
    data() {
        return {
            user: null,
            role: null,
            images: [],
            page: "AlternateLogin"
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