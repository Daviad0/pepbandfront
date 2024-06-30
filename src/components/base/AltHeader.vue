<template>
    <!-- <%- include('./dialog_box.ejs', {user: user}) %> -->


    


</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                user: null,
                role: null,
                images: []
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