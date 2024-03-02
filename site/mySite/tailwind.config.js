/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '640px',      // Small screens, default mobile
      'md': '768px',      // Medium screens, tablets
      'lg': '1024px',     // Large screens, laptops
      'xl': '1280px',     // Extra large screens, desktops
      '2xl': '1536px',    // 2 Extra large screens, large desktops

      // You can define additional custom screen sizes if needed
      // For example:
      // 'print': {'raw': 'print'},
    },
    extend: {},
    colors: {
      // backGround: '#F5F0F6',
      // headerFont: '#385F71',
      // headerFontHover: '#2B4162',
      // sectionHeadings: '#D7B377',
      // sectionSubHeadings: '#8F754F',
      // textFont: '#385F71',
      // projectsCard: '#536271',

      backGround: '#333533',
      headerFont: '#F5CB5C',
      headerFontHover: '#CFDBD5',
      sectionHeadings: '#F5CB5C',
      sectionSubHeadings: '#F5CB5C',
      textFont: '#E8EDDF',
      // projectsCard: '#CFDBD5',
      projectsCard: 'rgba(207, 219, 213, 0.3)',
      projectCardHeading: '#D7B377',
      projectCardFont: '#E8EDDF',
      headingOne: '#ffbf00',
      headingTwo: '#ffd24d',
      headingThree: '#ffff4d',
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