import { darken, lighten } from 'polished'

export const mapTheme = (props) => {
    return {
        '--color-primary': props.primary || '#41D6C3',
        '--color-primary-light': lighten(0.1, props.primary || '#41D6C3'),
        '--color-primary-dark': darken(0.1, props.primary || '#41D6C3'),

        '--color-secondary': props.secondary || '#42A1EC',
        '--color-secondary-light': lighten(0.1, props.secondary || '#42A1EC'),
        '--color-secondary-dark': darken(0.1, props.secondary || '#42A1EC'),

        '--color-default': props.default || '#DEDEDE',
        '--color-default-light': lighten(0.1, props.default || '#DEDEDE'),
        '--color-default-dark': darken(0.1, props.default || '#DEDEDE'),

        '--color-success': props.success || '#81CF87',
        '--color-success-light': lighten(0.1, props.success || '#81CF87'),
        '--color-success-dark': darken(0.1, props.success || '#81CF87'),

        '--color-warning': props.warning || '#FFCD00',
        '--color-warning-light': lighten(0.1, props.warning || '#FFCD00'),
        '--color-warning-dark': darken(0.1, props.warning || '#FFCD00'),

        '--color-danger': props.danger || '#EE5454',
        '--color-danger-light': lighten(0.1, props.danger || '#EE5454'),
        '--color-danger-dark': darken(0.1, props.danger || '#EE5454'),

        '--color-dark': props.dark || '#404852',
        '--color-light': props.light || '#FFFFFF'
    };
};

export const applyTheme = (props) => {
    const themeObject = mapTheme(props.theme);
    if (!themeObject) {
        return;
    }
    const root = document.documentElement;
    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }
        root.style.setProperty(property, themeObject[property]);
    });
};