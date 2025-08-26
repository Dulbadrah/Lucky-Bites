module.exports = {
  theme: {
    extend: {
      keyframes: {
        bgMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        bgMove: 'bgMove 20s ease-in-out infinite',
      },
    },
  },
}