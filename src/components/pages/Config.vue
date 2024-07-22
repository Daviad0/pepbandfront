<script setup>
</script>

<style>
@import '../../assets/config.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
            <div class="config-vertical-flex">
                <div class="config-header">
                    <div class="flex center">
                        <span class="large spacing">Configuration Management</span>
                    </div>
                    
    
                    <span class="small spacing">Manage all of the existing configuration for the entire pep band website.</span>
                    
                    <!-- <% if(permissions.includes("config")) { %> -->
                        <div class="message message-warning">
                            <span class="small message-content">This configuration applies for all users of the website. If you would like to edit your own configuration, please go <strong>here.</strong></span>
                            <span class="small message-content"><i>All edits to the site configuration are logged!</i></span>
                        </div>
                        <div class="flex center">
                            <span class="small spacing">Unique Config Name</span>
                            <input type="text" class="input small" placeholder="Config_Name" name="name" id="config-create-uniq_name" />
                            <select class="input small" name="type" id="config-create-type">
                                <option value="" disabled selected>Config Type</option>
                                <option value="string">String</option>
                                <option value="number">Number</option>
                                <option value="boolean">Boolean</option>
                                <option value="date">Date</option>
                                <option value="datetime">Datetime</option>
                            </select>
                            <button class="button-main" onclick="createConfig()" id="config-create"><span class="button-text">Create Config</span></button>
                        </div>
                    <!-- <% } else { %> -->
                        <div class="message message-danger">
                            <span class="small message-content">You do not have permission to create or manage configuration items.</span>
                        </div>
                    <!-- <% } %> -->
                    
                    
                    
                </div>
                <div id="config-list" class="config-list">
                    <!-- <%- include('./partials/config/all_config.ejs', {config: config, canEdit: permissions.includes("config")}); %> -->
                </div>
            </div>
        </div>
        
    </div>
</template>