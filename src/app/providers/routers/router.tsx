import { createBrowserRouter } from 'react-router';
import Layout from '@/app/providers/layouts/Layout';
import Main from '@/pages/Main/Main';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Main />,
         },
      ],
   },
]);

export default router;
