import Vue from 'vue'
import Router from 'vue-router'
import Project_list from '@/views/project_list'
import Project_profile from '@/views/project_profile'
import Project_search from '@/views/project_search'
import Project_detail_dom from '@/views/project_detail_dom'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Project_list',
      component: Project_list
    },{
      path: '/profile',
      name: 'Project_profile',
      component: Project_profile
    },{
      path: '/search',
      name: 'Project_search',
      component: Project_search
    },{
      path: '/dom',
      name: 'Project_detail_dom',
      component: Project_detail_dom
    }

  ]
})
