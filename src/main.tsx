import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { enableMocking } from './mocks';
import './index.css';
import router from './route';

const queryClient = new QueryClient();

(async () => {
  if (process.env.NODE_ENV === 'development') {
    await enableMocking();
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
})();
