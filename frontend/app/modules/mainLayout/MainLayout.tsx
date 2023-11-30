import './MainLayuot.scss';
import { useRoutes } from '@solidjs/router';
import routes from '../../../core/router';
import MainLayoutHeader from './components/MainLayoutHeader.tsx';

function MainLayout() {
  const Routes = useRoutes(routes);

  return (
    <>
      <MainLayoutHeader />
      <div class="container">
        <h1>Welcome to Tauri!</h1>
        <Routes />
      </div>
    </>
  );
}

export default MainLayout;
