import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Bottles from '@/components/Bottles'
import Drivers from '@/components/Drivers'
import DriverNew from '@/components/DriverNew'
import Sachets from '@/components/Sachets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
      }]
    },
    {
      path: '/sachets',
      name: 'Sachets',
      component: Sachets
    }
  ]
})
