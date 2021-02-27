import { createMuiTheme } from '@material-ui/core/styles';
import typographyScale from './static/typographyScale';
import overrides from './static/overrides';
import palette from './static/palette';

// A theme with custom primary and secondary color.
// It's optional.
export default createMuiTheme({
  palette,
  mixins: {
    toolbar: {
      height: 48,
      '@media (min-width:0px) and (orientation: landscape)': {
        height: 48,
      },
      '@media (min-width:600px)': {
        height: 48,
      },
    },
  },

  shape: {
    borderRadius: 4,
  },

  typography: {
    htmlFontSize: 10,
    fontFamily: [
      '"Komikax"',
      '"Open Sans"',
      '"sans-serif"',
    ].join(','),
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    useNextVariants: true,
    ...typographyScale,
  },

  overrides,

  spacing: 8,

});
