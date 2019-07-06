import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import homepage from './components/homepage.vue'
import detailpage from './components/detailpage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = {
  '/': homepage,
  '/detail': detailpage
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})



// new Vue({
//   render: h => h(App),
// }).$mount('#app')



