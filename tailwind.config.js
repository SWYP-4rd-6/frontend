/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Noto Sans KR"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '440px',
        csize: '1600px',
        'h-md': { raw: '(min-height: 800px)' },
      },

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
  plugins: [require('@tailwindcss/line-clamp')],
};
