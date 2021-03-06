import login from '@/components/login';
import Main from '@/components/Main';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: login
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  redirect: '/home',
  component: Main,
  children: [
    { path: 'home', title: 'home', name: 'home_index', component: () => import('@/components/home/home.vue') }
  ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/user',
    icon: 'key',
    name: 'user',
    title: '用户管理',
    component: Main,
    children: [
      { path: 'index', title: 'user', name: 'user_index', component: () => import('@/components/user/user.vue') }
    ]
  }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  loginRouter,
  ...appRouter,
	otherRouter
];
