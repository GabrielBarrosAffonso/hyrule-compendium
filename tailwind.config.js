/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.js',
        './src/**/*.tsx',
        './src/**/*.ts'
    ],
    theme: {
      extend: {
        colors: {
            lightGreen: "#b7e6da",
            mediumGreen: "#2c9a82"
        },
        backgroundImage: {
            'zeldaPattern': "url('/public/background-zelda.png')",
        }
      }
    },
    plugins: [],
}