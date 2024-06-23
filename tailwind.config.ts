import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'mobile':{max: '650px'},
      'xs': {min: '650px', max:'750px'},
      'sm': {min:'750px', max: '950px'},
      'md': {min: '950px', max:'1200px'},
      'lg':{min:'1200px', max:'1480px'},
      'xl':{min:'1400px'}
    },
    extend: {
      backgroundImage: {
        'gradient-60': 'linear-gradient(60deg, var(--tw-gradient-stops))'
      },
      gridTemplateColumns:{
        'my-grid': "repeat(auto-fill, minmax(300px, 1fr))"
      }
    },
  },
  plugins: [],
};
export default config;
