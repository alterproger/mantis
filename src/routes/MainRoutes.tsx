import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import AuthGuard from 'utils/route-guard/AuthGuard';
import Loadable from '../components/Loadable';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        }
      ]
    }
  ]
};

export default MainRoutes;
