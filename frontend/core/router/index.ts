import type { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('../../app/modules/treeView/TreeView.tsx')),
  },
];

export default routes;
