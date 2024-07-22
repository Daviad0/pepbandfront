<script setup>
</script>

<template>
    <div class="config-item">
        <div>
            <div class="flex apart">
                <div class="flex center config-detail-tag">
                    <span class="tiny config-main-info">Configuration ID: </span>
                    <span class="tiny config-detail-value config-main-info">{{ this.config.cid }}</span>
                    <span class="tiny config-main-info"><i>Last Updated by: </i></span>
                    <span class="tiny config-detail-value config-main-info resolve-further">{{ this.config.uid }}</span>
                </div>
            </div>
            
            <div class="flex apart config-details">
                <div class="flex center config-details">
                    <div class="config-detail-item">
                        <div class="flex apart">
                            <span class="tiny config-detail-tag">Unique Name</span>
                        </div>
                        <div class="flex apart">
                            <input :v-bind="this.config.uniq_name" class="input config-detail-value" placeholder="config_name" disabled/>
                        </div>
                    </div>
                    <div class="config-detail-item">
                        <div class="flex apart">
                            <span class="tiny config-detail-tag">Visible Name</span>
                        </div>
                        <div class="flex apart">
                            <input :v-bind="this.config.name" type="text" class="input config-detail-value" placeholder="Config Name" />
                        </div>
                    </div>
                    <div class="config-detail-item">
                        <div class="flex apart">
                            <span class="tiny config-detail-tag">Value</span>
                        </div>
                        <div class="flex apart">
                            <input v-if="config.type == 'string'" :v-bind="this.config.value" type="text" class="input config-detail-value" placeholder="1234" />
                            <input v-if="config.type == 'number'" :v-bind="this.config.value" type="number" class="input config-detail-value" placeholder="1234"/>
                            <select v-if="config.type == 'boolean'" :v-bind="this.config.value" class="input config-detail-value">
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                            <input v-if="config.type == 'date'" :v-bind="this.config.value" type="date" class="input config-detail-value" />
                            <input v-if="config.type == 'datetime'" :v-bind="this.config.value" type="datetime-local" class="input config-detail-value" />
                        </div>
                    </div>
                </div>
                
                <div class="config-detail-item">
                    <button class="button-alternate"><span class="button-text">Remove</span></button>
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
    name: "Config",
    props: {
        config: Object,
        canEdit: Boolean
    },
    data: {
        
    }
}
</script>