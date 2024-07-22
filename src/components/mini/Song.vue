<script setup>
</script>

<template>
    <div class="song-item">
        <div>
            <div class="flex apart">
                <div class="flex center song-detail-tag">
                    <span class="tiny song-main-info">Song ID: </span>
                    <span class="tiny song-detail-value song-main-info">{{ song.soid }}</span>
                    
                </div>
            </div>
            
            <div class="flex apart song-details">
                <div class="flex center end">
                    <div>
                        <div class="flex center wrap song-details">
                            <div class="song-detail-item">
                                <div class="flex apart">
                                    <span class="tiny song-detail-tag">Full Name</span>
                                </div>
                                <div class="flex apart">
                                    <input :v-bind="this.song.name" type="text" class="input song-detail-value" placeholder="Name"/>
                                </div>
                            </div>
                            <div class="song-detail-item">
                                <div class="flex apart">
                                    <span class="tiny song-detail-tag">Artist</span>
                                </div>
                                <div class="flex apart">
                                    <input :v-bind="this.song.artist" type="text" class="input song-detail-value" placeholder="Artist"/>
                                </div>
                            </div>
                            <div class="song-detail-item">
                                <div class="flex apart">
                                    <span class="tiny song-detail-tag">Modification</span>
                                </div>
                                <div class="flex apart">
                                    <input :v-bind="this.song.modification" type="text song-italics" class="input song-detail-value" placeholder="Act 1"/>
                                </div>
                            </div>
                        </div>
                        <div class="song-expand song-expand-hide">
                            <div class="flex apart">
                                <div class="flex center wrap">
                                    <div class="song-detail-item">
                                        <div class="flex apart">
                                            <span class="tiny song-detail-tag">Visible Name</span>
                                        </div>
                                        <div class="flex apart">
                                            <input :v-bind="this.song.friendly_name" type="text" class="input song-detail-value" placeholder="Friendly Name"/>
                                        </div>
                                    </div>
                                    
                                    <div class="song-detail-item">
                                        <div class="flex apart">
                                            <span class="tiny song-detail-tag">Duration</span>
                                        </div>
                                        <div class="flex apart">
                                            <div class="flex center">
                                                <input :v-bind="this.duration_minutes" type="number" class="input song-detail-value song-duration" placeholder="0"/>
                                                <span class="tiny song-detail-tag song-detail-value">m</span>
                                                <input :v-bind="this.duration_seconds" type="number" class="input song-detail-value song-duration" placeholder="0"/>
                                                <span class="tiny song-detail-tag song-detail-value">s</span>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
            
                                </div>
                            </div>
                            
        
                            <div class="spacing song-usage-details-button">
                                <button class="button-alternate spacing"><span class="button-text">Get Past Song Usage</span></button>
                            </div>
                            
        
                            <div class="song-usage-details no-display">
                                <div class="flex apart">
                                    <div class="flex center">
                                        <div class="song-detail-item">
                                            <div class="flex apart">
                                                <span class="tiny song-detail-tag">Time Frame</span>
                                            </div>
                                            <div class="flex apart">
                                                <select class="input small song-detail-value song-usage-timespan">
                                                    <option value="any" selected>Any Time</option>
                                                    <option value="-168">Past Week</option>
                                                    <option value="-720">Past Month</option>
                                                    <option value="-8760">Past Year</option>
                                                </select>
            
                                                <span class="small song-usage"></span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            
                            
                            
                        </div>
                    </div>

                    <div onclick="toggleSongExpansion(this)" class="song-expand-button flex center">
                        <span class="material-symbols-rounded song-expand-button-content medium">arrow_downward</span>
                    </div>
                </div>
                
                <div>
                    <div class="song-detail-item">
                        <div class="flex apart">
                            <span class="tiny song-detail-tag">Type of Song</span>
                        </div>
                        <div class="flex apart">
                            <select class="input song-detail-value" name="category">
                                <option value="null" disabled>Select a Type</option>
                                <option value="regular">Regular Song</option>
                                <option value="quick">Quickie</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                
                <div class="song-detail-item">
                    
                    <button class="button-alternate error-bg"><span class="button-text">Delete</span></button>
                
                    <button class="button-alternate"><span class="button-text">Duplicate</span></button>
                </div>
            </div>
            <div>
                <span class="small no-display error error-message" name="error"></span>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "Song",
    props: {
        song: Object,
        canRemove: Boolean
    },
    data: {
        duration_seconds: 0,
        duration_minutes: 0
    }
}
</script>