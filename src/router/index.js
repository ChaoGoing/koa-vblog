import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)
console.log(routes)

export default new Router({
    routes,
})
