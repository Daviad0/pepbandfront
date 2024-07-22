<script setup>
</script>

<style>
@import '../../assets/songs.css';
</style>

<template>
    <div class="mainbodyoutside flex center">
        <div class="mainbody">
            <div class="song-vertical-flex">
                <div class="song-header">
                    <div class="flex center">
                        <span class="large spacing">All Available Songs</span>
                    </div>
                    
    
                    <span class="small spacing">Below are all of the available songs that are currently played by the band! If you have any additional requests, click the "Request Another Song" button!</span>
                    <div class="message message-warning">
                        <span class="small message-content">Removing songs can cause problems for both events and event templates.</span>
                    </div>

                    <div class="flex center wrap spacing">
                        <span class="small">Filter by...</span>
                        <div class="flex center wrap">
                            <div class="song-detail-item">
                                <div class="flex apart">
                                    <span class="tiny song-detail-tag">Song Name</span>
                                </div>
                                <div class="flex apart">
                                    <input type="text" class="input small" onchange="updateSongFilter()" placeholder="Song" name="name" id="song-search-name" />
                                </div>
                            </div>
                            <div class="song-detail-item">
                                <div class="flex apart">
                                    <span class="tiny song-detail-tag">Song Type</span>
                                </div>
                                <div class="flex apart">
                                    <select onchange="updateSongFilter()" class="input small" name="age" id="song-search-category">
                                        <option value="any">Any</option>
                                        <option value="regular">Regular</option>
                                        <option value="quick">Quickie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div id="song-list" class="song-list">
                    
                </div>
            </div>
        </div>
        
    </div>
</template>