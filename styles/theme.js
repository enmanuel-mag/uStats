import { createMuiTheme } from '@material-ui/core';
import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const theme = createMuiTheme({
  palette: {
    primary: {
      contrastText: white,
      dark: colors.red[700],
      main: colors.red[500],
      light: colors.red[100],
    },
  },
});

export default theme;
