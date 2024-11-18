import { createRouter, createWebHistory } from "vue-router";
// import Header from "../components/header_component.vue";
import ProductList from "../components/product_list.vue";

import ProductDetails from "../components/products_details.vue";
import Login from "../components/login_user.vue";
import Register from "../components/register_user.vue";
//import Shop from "../components/shop_user.vue";
/*import admin from "../views/Admin.vue";*/

const routes = [
  {
    path: '/',
    name: "header_component",
    component: ProductList,
  },
  {
    path: '/login',
    name: "login_user",
    component: Login,
    beforeEnter: () => {
      import('../styles/style2.css')
    }
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/panier_shop.vue'),
  },
  /*{
    path: '/login',
    name: "LOGIN",
    component: login,
  },*/
  {
    path: '/register',
    name: "register_user",
    component: Register,
    beforeEnter: () => {
      import('../styles/style3.css')
    }
  },
  /*{
      path: '/admin',
      name: "ADMIN",
      component: Admin,
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
