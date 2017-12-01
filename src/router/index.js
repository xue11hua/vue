import Vue from 'vue'
import Router from 'vue-router'
import andriod from '@/components/android/andriod'
import denglu from '@/components/denglu/denglu'
import xinxi from '@/components/denglu/xinxi'
import tupian from '@/components/tupian'
import wenzhang from '@/components/wenzhang'
import yinyue from '@/components/yinyue'
import bofang from '@/components/bofang'
import seach from '@/components/seach'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'andriod',
      component: andriod
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/xinxi',
      name: 'xinxi',
      component: xinxi
    },
    {
      path: '/tupian',
      name: 'tupian',
      component: tupian
    },
    {
      path: '/wenzhang',
      name: 'wenzhang',
      component: wenzhang
    },
    {
      path: '/yinyue',
      name: 'yinyue',
      component: yinyue
    },
    {
      path: '/bofang',
      name: 'bofang',
      component: bofang
    },
    {
      path: '/seach',
      name: 'seach',
      component: seach
    },


  ]
})
