/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      backGround: '#2C3D55',
      headerFontHover: '#84828F',
      sectionHeadings: '#84828F',
      sectionSubHeadings: '#b0afb6',
      textFont: '#f2f2f3',
      projectsCard: '#536271',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],

}

// 84828F
// 6A687A
// 536271
// 3E4C5E
// 2C3D55