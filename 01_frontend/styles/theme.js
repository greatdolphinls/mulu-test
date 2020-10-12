
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      light: '#4791db',
      main: '#1c1b1b',
      dark: '#115293',
      contrastText: '#fff'
    },
    secondary: {
      light: '#555e6c',
      main: '#1c1b1b',
      dark: '#1e2532',
      contrastText: '#fff'
    },
    danger: {
      light: '#ff3333',
      main: '#ff0000',
      dark: '#b20000',
      contrastText: '#fff'
    },
    background: {
      default: '#fff',
      primary: '#faf8f8'
    },
    text: {
      primary: '#1c1b1b',
      secondary: '#6e6f70'
    },
  },
  custom: {
    palette: {
      green: '#3dae68',
      lightGreen: '#ebf1f4',
      red : '#a20e3c',
      orange: '#d54a21',
      grey: 'rgb(255, 255, 255, .6)',
      blueGrey: '#5c739c',
      lightGrey: '#e2ebef',
      darkGrey: 'rgb(255, 255, 255, .2)',
      hover: '#4a90e2'
    },
    layout: {
      mainPadding: 8,
      topAppBarHeight: 90,
      footerHeight: 90,
      drawerWidth: 300,
      pageMaxWidth: 1150
    }
  }
}));

export default theme;
