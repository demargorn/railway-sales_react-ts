import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import store from '@/app/providers/stores/store';
import router from '@/app/providers/routers/router';
import '@/app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </StrictMode>
);
