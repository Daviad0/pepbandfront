<template>
    <!-- <%- include('./dialog_box.ejs', {user: user}) %> -->


    <nav class="header color-header flex center" v-if="!alternate">
        <a href="/"><img class="logo" src="../../assets/pepband.png" alt="Pep Band Logo"></a>
        <div class="fill large-container">
            <div class="flex apart">
                <div class="content flex center">
                    <a href="/events" class="option">Events</a>
                    <a href="/songs" class="option">Songs</a>
                    <a href="/groups" class="option">Groups</a>
                    <a href="https://www.huskiespepband.com/" target="_blank" class="option">The Pep Band <span class="material-symbols-rounded small">open_in_new</span></a>
                </div>
                <div class="content flex center">
                    
                    
                    
                    <!-- <% if(user) { %>
                        <span class="small white">Hey, <%= user.mtu_id %></span>
                        <a onclick="log_out_click()" class="option">Log Out</a>
                        <div style="width:65px;height:10px"></div>
                        
                    <% } else { %>
                        <a onclick="sign_in_click()" class="option">Sign In</a>
                    <% } %> -->
                </div>
            </div>
        </div>
        
        <div class="small-container">
            <div class="flex center">
                <a class="option material-symbols-rounded white" onclick="showSmallMenu()">menu</a>
            </div>
        </div>
        <!-- <% if(user) { %>
            <div class="account-dot flex center" onclick="window.location = '/account'">
                <span class="material-symbols-rounded role-icon">
                    <%= role ? role.icon : "music_note" %>
                </span>
            </div>
        <% } %> -->
    </nav>

    <div class="corner">
        <!-- <%- include('./corner.ejs', {images: images}); %> -->
    </div>

    <nav class="header flex center" v-if="alternate">
        <div class="fill large-container">
            <div class="fill flex apart">
                <div class="content flex center">
                    <a href="/events" class="option">Events</a>
                    <a href="/songs" class="option">Songs</a>
                    <a href="/groups" class="option">Groups</a>
                    <a href="https://www.huskiespepband.com/" target="_blank" class="option">The Pep Band <span class="material-symbols-rounded small">open_in_new</span></a>
                </div>
                <div class="content flex center">
                    
                    
                    
                    <!-- <% if(user) { %>
                        <a onclick="log_out_click()" class="option">Log Out</a>
                        <div style="width:65px;height:10px"></div>
                        
                    <% } else { %>
                        <a onclick="sign_in_click()" class="option">Sign In</a>
                    <% } %> -->
                </div>
            </div>
        </div>
        <div class="small-container">
            <div class="flex center">
                <a class="option material-symbols-rounded white" onclick="showSmallMenu()">menu</a>
            </div>
        </div>
        <!-- <% if(user) { %>
            <div class="account-dot flex center" onclick="window.location = '/account'">
                <span class="material-symbols-rounded role-icon">
                    <%= role ? role.icon : "music_note" %>
                </span>
            </div>
        <% } %> -->
    </nav>

</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                user: null,
                role: null,
                images: [],

                alternate: false
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