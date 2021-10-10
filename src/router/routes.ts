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
      { path: '/ViewAccount', component: () => import('pages/ViewAccount.vue') },
      { path: '/ViewStudentPage', component: () => import('pages/ViewStudentPage.vue') },
      { path: '/SearchAdminPage', component: () => import('pages/SearchAdminPage.vue') },
      { path: '/SummaryAdmin', component: () => import('pages/SummaryAdmin.vue') },
    ],
  },

  {
    path: '/',
    component: () => import('layouts/ChairPersonLayout.vue'),
    children: [

      { path: '/ManageStudentPage', component: () => import('pages/ManageStudentPage.vue') },
      { path: '/ViewStudentChairPage', component: () => import('pages/ViewStudentChairPage.vue') },
      { path: '/SearchChairPage', component: () => import('pages/SearchChairPage.vue') },
      { path: '/ManageAcc', component: () => import('pages/ManageAcc.vue') },
      { path: '/Homepage', component: () => import('pages/Homepage.vue') },
      { path: '/trypage', component: () => import('pages/trypage.vue') },

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
