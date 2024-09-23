/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "manzana":"#D0F5BE",
        "menta":"#98EECC", 
        "marron":"#A4907C",

        "azul":"#132043",
        "azulc":"#1F4172",
        "rosa":"#F1B4BB",
        "crema":"#FDF0F0"
      },
      fontFamily:{
        "Fatface": ['"Abril Fatface", serif']
        
      }
    },
  },
  plugins: [],
}

