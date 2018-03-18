import { generateAsyncRouteComponent } from './rrv4Helpers';

export default [
  {
    path: parentRoute => `${parentRoute}/`,
    exact: true,
    component: generateAsyncRouteComponent({
      loader: () => import(`../Landing`)
    })
  },
  {
    path: parentRoute => `${parentRoute}/search`,
    component: generateAsyncRouteComponent({
      loader: () => import(`../Search`)
    })
  },
  {
    path: parentRoute => `${parentRoute}/details/:id`,
    component: generateAsyncRouteComponent({
      loader: () => import(`../Details`)
    })
  }
];
