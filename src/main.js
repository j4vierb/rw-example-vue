import { createApp, reactive } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// create a global object to share across multiple components
const globalStore = reactive( { flashMessage: '' });
// make this object available for components in our app
app.provide('globalStore', globalStore);

app.mount('#app')
