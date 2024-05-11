import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue';
import EventListView from '../views/EventListView.vue'
import EventLayout from '@/views/event/Layout.vue';
import EventDetails from '@/views/event/Details.vue';
import EventRegister from '@/views/event/Register.vue';
import EventEdit from '@/views/event/Edit.vue';
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      // parse route param
      props: (route) => ({page: parseInt(route.query.page) || 1})
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      // can't parse because isn't a param is part
      // of the URL
      props: true,
      component: EventLayout,
      // nested routes
      children: [
        {
          path: "",
          name: "event-details",
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegister
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEdit
        },
      ]
    },
    {
      path: '/event/:id',
      redirect: () => {
        return {
          name: 'event-details'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
      alias: '/about' // both about-us and about shows the same component
    },
    { // using redirect to the new route
      path: '/about',
      redirect: { name: 'about' }
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFound,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError
    }
  ]
})

export default router;
