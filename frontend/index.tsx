/* @refresh reload */
import './assets/styles/index.scss';
import { Router } from '@solidjs/router'; // 👈 Import the router
import { render } from 'solid-js/web';
import MainLayout from './app/modules/mainLayout/MainLayout.tsx';

render(
  () => (
    <Router>
      <MainLayout />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);
