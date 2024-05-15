import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { enableMocking } from './mocks';
import './index.css';
import 'react-material-symbols/rounded'; 
import router from './route';

const queryClient = new QueryClient();

(async () => {
  // if (process.env.NODE_ENV === 'development') {
  //   await enableMocking();
  // }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </GoogleOAuthProvider>,
  );
})();
