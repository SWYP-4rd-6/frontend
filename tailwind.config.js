/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        signature: '#0173FA',
        'sub-y': '#F6AF19',
        'sub-g': '#95CC79',
        'sub-r': '#ED403B',
        'sub-p': '#CC5BE7',
        'sub-non': '#D9D9D9',
        'sub-bu': '#646464',
      },
      boxShadow: {
        top: '0 -8px 10px -10px rgba(0, 0, 0, 0.5)', // 위쪽 10% 드롭쉐도우
      },
    },
  },
  plugins: [],
};
