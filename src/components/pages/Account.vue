<script setup>
</script>

<style>
@import '../../assets/account.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
            <div class="splitpage">
                <div class="content-left">
                    <div class="floating-box account-sprawl">
                      <span class="large">[NAME]</span>
                      <span class="medium">[MTU_ID]</span>
                    </div>
                    
                </div>
                <div class="content-right">
                    
                  <span class="large">My Groups and Splits</span>
                  <div class="flex center wrap">
                      <!-- <% groups.forEach(function(g){ %>
                          <%- include('./partials/config/group_item_view.ejs', {group: g}); %>
                      <% }); %> -->
                  </div>
                    
                    
                </div>
            </div>
        </div>
        
    </div>
</template>