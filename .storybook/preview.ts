import type { Preview } from '@storybook/react';
// tailwindCSS 스타일링을 스토리북에도 추가합니다.
import '../src/index.css'

const preview: Preview = {
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
