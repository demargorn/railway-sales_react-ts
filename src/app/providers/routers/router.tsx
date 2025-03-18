import { createHashRouter } from 'react-router';
import Layout from '@/app/providers/layouts/Layout';
import Main from '@/pages/Main/Main';
import SelectTrain from '@/pages/Select/SelectTrain/SelectTrain';
import SelectSeat from '@/pages/Select/SelectSeat/SelectSeat';

const router = createHashRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Main />,
         },
         {
            path: '/trains',
            element: <SelectTrain />,
         },
         {
            path: '/seats',
            element: <SelectSeat />,
         },
      ],
   },
]);

export default router;
