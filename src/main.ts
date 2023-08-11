import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'


const app = createApp(App)

// Đăng ký thành phần global
// app.component('global-component', GlobalComponent)


app.mount('#app')