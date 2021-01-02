module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        light: 'var(--color-primary-light)',
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-primary-dark)'
      },
      secondary: {
        light: 'var(--color-secondary-light)',
        DEFAULT: 'var(--color-secondary)',
        dark: 'var(--color-secondary-dark)'
      },
      default: {
        light: 'var(--color-default-light)',
        DEFAULT: 'var(--color-default)',
        dark: 'var(--color-default-dark)'
      },
      success: {
        light: 'var(--color-success-light)',
        DEFAULT: 'var(--color-success)',
        dark: 'var(--color-success-dark)'
      },
      warning: {
        light: 'var(--color-warning-light)',
        DEFAULT: 'var(--color-warning)',
        dark: 'var(--color-warning-dark)'
      },
      danger: {
        light: 'var(--color-danger-light)',
        DEFAULT: 'var(--color-danger)',
        dark: 'var(--color-danger-dark)'
      },
      dark: 'var(--color-dark)',
      light: 'var(--color-light)',
      transparent: 'transparent',
    },
    extend: {
      fontSize: {
        'base': '14px',
      },
      fontFamily: {
        'sans': ['Museo Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
