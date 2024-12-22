/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Menambahkan font Poppins
      },
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        tertiary: '#64748b',
        quaternary: '#C9E6F0',
      },
      keyframes: {
        keAtas: {
          '0%, 90%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        keBawah: {
          '0%, 90%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        melebar: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        fadeInKanan: {
          '0%': { transform: 'translateX(-2rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInAtas: {
          '0%': { transform: 'translateY(2rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInKiri: {
          '0%': { transform: 'translateX(2rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        keAtas: 'keAtas 1s linear 2s',
        keBawah: 'keBawah 1s linear 2s',
        melebar: 'melebar 2.5s linear forwards',
        fadeInKanan: 'fadeInKanan .8s ease-out forwards',
        fadeInAtas: 'fadeInAtas .8s ease-out forwards',
        fadeInKiri: 'fadeInKiri .8s ease-out forwards',

      },
    },
  },
  plugins: [],
}

