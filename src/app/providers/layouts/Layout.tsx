import Header from '@/widgets/Header/Header';
import { Outlet } from 'react-router';

const Layout = () => {
   return (
      <>
         <Header />
         <Outlet />
      </>
   );
};

export default Layout;
