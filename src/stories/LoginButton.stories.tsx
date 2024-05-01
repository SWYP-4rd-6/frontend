import { GoogleOAuthProvider } from '@react-oauth/google';
import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '@/components/LoginButton';

const meta: Meta<typeof LoginButton> = {
  component: LoginButton,
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const LoginButtonStory: Story = {
  args: {
    loginType: 'email',
  },
};

LoginButtonStory.decorators = [
  (Story) => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <Story />
    </GoogleOAuthProvider>
  ),
];
