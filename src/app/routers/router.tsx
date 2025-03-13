import { createBrowserRouter } from 'react-router';
import Layout from '../providers/layouts/Layout';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [],
   },
]);

export default router;
