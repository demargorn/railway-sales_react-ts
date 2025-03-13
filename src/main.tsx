import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from '@/app/stores/store';
import router from '@/app/routers/router';
import '@/app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
