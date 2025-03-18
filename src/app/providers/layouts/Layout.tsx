import { Outlet } from 'react-router';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';

const Layout = () => {
   return (
      <>
         <Header />
            <Outlet />
         <Footer/>
      </>
   );
};

export default Layout;
