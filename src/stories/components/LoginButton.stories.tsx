import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '@/components/Button/LoginButton';

const meta: Meta<typeof LoginButton> = {
  title: 'Components/LoginButton',
  component: LoginButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const Default: Story = {
  args: {
    loginType: 'email',
  },
};