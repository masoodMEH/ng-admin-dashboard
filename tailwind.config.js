/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B7FFF',
        secondary: '#9333ea',
        accent: '#00BFAA',
        neutral: '#111827',
        'base-100': '#f3f4f6',
        info: '#0ea5e9',
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['IRANSansX', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
