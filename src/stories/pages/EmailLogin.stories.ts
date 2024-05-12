import type { Meta, StoryObj } from '@storybook/react';
import { EmailLogin } from '@/pages/login-page';

const meta: Meta<typeof EmailLogin> = {
  title: 'Pages/EmailLogin',
  component: EmailLogin,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmailLogin>;

export const Default: Story = {};