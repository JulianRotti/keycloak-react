import { lazy } from 'react';

// Centralized route configuration
const routes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('../pages/HomePage.js')),
    roles: ['public'],
  },
  {
    name: 'Editor Role',
    path: '/editor-role',
    component: lazy(() => import('../pages/EditorRole.js')),
    roles: ['editor'],
  },
  {
    name: 'All Roles',
    path: '/all-roles',
    component: lazy(() => import('../pages/AllRoles.js')),
    roles: ['editor', 'viewer'],
  },
  {
    name: 'No Access',
    path: '/no-access',
    component: lazy(() => import('../pages/NoAccess.js')),
    roles: ['public'],
    hidden: true,
  },
];

export default routes;
