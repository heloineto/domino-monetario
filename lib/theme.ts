import { ThemeOptions, createTheme } from '@mui/material';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

const { theme: twTheme } = resolveConfig(tailwindConfig as any) as any;

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      sm: parseInt(twTheme.screens.sm),
      md: parseInt(twTheme.screens.md),
      lg: parseInt(twTheme.screens.lg),
      xl: parseInt(twTheme.screens.xl),
      '2xl': parseInt(twTheme.screens['2xl']),
    } as any,
  },
  palette: {
    primary: {
      light: twTheme.colors.sky[500],
      main: twTheme.colors.sky[600],
      dark: twTheme.colors.sky[700],
      contrastText: '#FFF',
      ...twTheme.colors.sky,
    },
    secondary: {
      light: twTheme.colors.blue[400],
      main: twTheme.colors.blue[500],
      dark: twTheme.colors.blue[600],
      contrastText: '#FFF',
    },
    error: {
      light: twTheme.colors.red[400],
      main: twTheme.colors.red[500],
      dark: twTheme.colors.red[600],
    },
    warning: {
      light: twTheme.colors.yellow[400],
      main: twTheme.colors.yellow[500],
      dark: twTheme.colors.yellow[600],
    },
    info: {
      light: twTheme.colors.blue[400],
      main: twTheme.colors.blue[500],
      dark: twTheme.colors.blue[600],
    },
    success: {
      light: twTheme.colors.green[400],
      main: twTheme.colors.green[500],
      dark: twTheme.colors.green[600],
    },
    grey: {
      50: twTheme.colors.gray[50],
      100: twTheme.colors.gray[100],
      200: twTheme.colors.gray[200],
      300: twTheme.colors.gray[300],
      400: twTheme.colors.gray[400],
      500: twTheme.colors.gray[500],
      600: twTheme.colors.gray[600],
      700: twTheme.colors.gray[700],
      800: twTheme.colors.gray[800],
      900: twTheme.colors.gray[900],
    },
  },
  typography: {
    fontFamily: twTheme.fontFamily.sans.join(','),
    fontSize: parseFloat(twTheme.fontSize.base[0]) * 16,
    fontWeightLight: Number(twTheme.fontWeight.light),
    fontWeightRegular: Number(twTheme.fontWeight.normal),
    fontWeightMedium: Number(twTheme.fontWeight.medium),
    fontWeightBold: Number(twTheme.fontWeight.bold),
    h1: {
      fontWeight: 600,
      fontSize: twTheme.fontSize['8xl'][0],
      lineHeight: twTheme.fontSize['8xl'][1].lineHeight,
    },
    h2: {
      fontWeight: 600,
      fontSize: twTheme.fontSize['7xl'][0],
      lineHeight: twTheme.fontSize['7xl'][1].lineHeight,
    },
    body1: {
      fontWeight: 500,
      fontSize: twTheme.fontSize['base'][0],
      lineHeight: twTheme.fontSize['base'][1].lineHeight,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        container: {
          backdropFilter: 'blur(2px)',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(2px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: `${twTheme.colors.sky[600]} !important`,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255 255 255 / 0.5)',
          borderWidth: '2px',
          borderRadius: '1rem',
          borderColor: 'white',
          boxShadow:
            '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiCheckbox: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
