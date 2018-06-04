import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bottles from '@/components/Bottles'
import Drivers from '@/components/Drivers'
import DriverNew from '@/components/DriverNew'
import Sachets from '@/components/Sachets'
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-349973.oktapreview.com/oauth2/default',
  client_id: '0oafa2huqv0hrWKu10h7',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback
    },
    {
      path: '/bottles',
      name: 'Bottles',
      component: Bottles
    },
    {
      path: '/drivers',
      name: 'Drivers',
      component: Drivers,
      children: [{
        path: 'newdriver',
        component: DriverNew
      }],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sachets',
      name: 'Sachets',
      component: Sachets
    }
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
