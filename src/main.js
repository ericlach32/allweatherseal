import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: 'https://allweatherseal.prismic.io/api/v2'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
