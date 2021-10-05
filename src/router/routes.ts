import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/loginland.vue'),
    children: [
      { path: '', component: () => import('pages/landingpage.vue') },
      { path: '/landingpage', component: () => import('pages/landingpage.vue') },




    ],
  },

  {
    path: '/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [

      { path: '/ManageAccountPage', component: () => import('pages/ManageAccountPage.vue') },
      { path: '/ManageStudentPage', component: () => import('pages/ManageStudentPage.vue') },

    ],
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
