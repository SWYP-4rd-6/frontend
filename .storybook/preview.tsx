import React from 'react';
import type { Preview, StoryContext } from '@storybook/react';
// tailwindCSS 스타일링을 스토리북에 추가합니다.
import '../src/index.css';
// 아이콘 스타일링을 스토리북에 추가합니다.
import 'react-material-symbols/rounded';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { withRouter } from 'storybook-addon-remix-react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const preview: Preview = {
  decorators: [
    withRouter,
    (Story: React.ComponentType, context: StoryContext) => (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
        <QueryClientProvider client={queryClient}>
        {context.parameters.fileName.includes('/pages/') ? (
          <div className='bg-white max-w-md h-screen relative mx-auto shadow-2xl overflow-y-scroll'>
            <Story />
          </div>
        ) : (
          <Story />
        )}
        </QueryClientProvider>
      </GoogleOAuthProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
