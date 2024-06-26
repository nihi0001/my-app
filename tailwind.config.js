/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'beige': '#F7F6E8',
      'orange': '#ff7733',
      'bannerBlue': '#577492',
      'navBlue': '#6F8FAF',
      'white': '#FFFFFF',
      'input': '#F2FDFF',
      'black': '#333333',
      'lightGrey': '#d9D8C5',
      'darkGrey': '#6C6A56',
      'grey-80': '#333333',
      'grey-60': '#666666',
    },
    extend: {
      fontFamily:{
        'pText':['var(--poppins)', 'sans-serif'],
      },
      fontWeight:{
        'pText': 400,
      }
    },
  },
  plugins: [],
};



  // fontFamily:{
  //   headingText: ['Libre-Baskerville']
  //   pText:['Poppins']
  // }

