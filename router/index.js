import Vue from 'vue'
import Router from 'vue-router'

import Accueil from '@/components/Accueil'
import Apropos from '@/components/Apropos'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

import Projet1 from '@/components/projets/Projet1'
import Projet2 from '@/components/projets/Projet2'
import Projet3 from '@/components/projets/Projet3'
import Projet4 from '@/components/projets/Projet4'

Vue.use(Router)

export default new Router({
  routes: [
    
    {path: '/',          name: 'Accueil',   component: Accueil,   meta: { transitionName: 'slide-bottom' }, },
    {path: '/Apropos',   name: 'A propos',  component: Apropos,   meta: { transitionName: 'slide-top' }, },
    {path: '/Portfolio', name: 'Portfolio', component: Portfolio, meta: { transitionName: 'slide-bottom' }, },
    {path: '/Contact',   name: 'Contact',   component: Contact,   meta: { transitionName: 'slide-top' }, },
    
    {path: '/Projet1',   name: 'Projet 1',   component: Projet1,  meta: { transitionName: 'slide-left' }, },
    {path: '/Projet2',   name: 'Projet 2',   component: Projet2,  },
    {path: '/Projet3',   name: 'Projet 3',   component: Projet3,  },
    {path: '/Projet4',   name: 'Projet 4',   component: Projet4,  },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
