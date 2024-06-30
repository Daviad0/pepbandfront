
import { store } from './scripts/store'

store._initialize();

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
