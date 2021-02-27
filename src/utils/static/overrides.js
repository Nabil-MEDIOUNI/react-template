import palette from './palette';

const overrides = {
  MuiInputBase: {
    root: {
      color: '#5e5e5e',
    },
  },
  MuiPaper: {
    root: {
      color: '#5e5e5e',
    },
  },
  MuiDivider: {
    root: {
      height: 0.5,
    },
  },
  BorderSelect: {
    select:
    {
      minWidth: 'fit-content',
    },

  },
  MuiMenuItem: {
    fontFamily: 'roboto',
    root: {
      paddingBottom: 16,
      paddingTop: 16,
      paddingRight: 16,
      paddingLeft: 16,
      '&:hover': {
        backgroundColor: 'rgba(156, 156, 156, 0.04)',
      },
    },
  },

  MuiChip: {
    labelSmall: {
      fontSize: 14,
    },
  },
  MuiAutocomplete: {
    popupIndicator: {
      display: 'none',
    },
  },
  OutlineSelect: {
    select: {
      minWidth: 80,
      paddingBottom: 4,
      paddingTop: 4,
      paddingLeft: 6,
      alignItems: 'center',
    },
    icon: {
      right: 0,
      color: '#757575',
      fontSize: 16,
      marginTop: 4,
      paddingRight: 8,
    },
    listIcon: {
      minWidth: 24,
    },
    list: {
      paddingLeft: 0, paddingBottom: 0, paddingRight: 0,
    },
  },
  PrivateTabIndicator: {
    colorSecondary: {
      backgroundColor: '#FFC845',
    },
  },
  MuiTab: {
    wrapper: {
      color: '#3e3e3e',
      fontSize: 16,
      padding: '0px 26px',
    },
  },

  MuiIcon: {
    root: {
      fontSize: '1rem',
      width: '100%',
    },
    fontSizeSmall: {
      display: 'none',

    },
  },

  MuiAppBar: {
    colorPrimary: {
      backgroundColor: 'none',
    },
    positionFixed: {
      top: '',
    },
  },
  MuiTypography: {
    root: {
      userSelect: 'none',
    },
  },
  MuiTooltip: {
    popper: {
      display: 'none',
    },
  },
  MuiFab: {
    root: {
      width: 54,
      height: 54,
    },
    sizeSmall: {
      width: 35,
      height: 20,
    },
  },
  MuiSpeedDialIcon: {
    icon: {
      fontSize: 24,
      margin: 2,
    },
    root: {
      height: 'none',
    },
  },
  MuiFilledInput: {
    root: {
      backgroundColor: 'white',
      border: '1px solid #E5E5E5',
      borderRadius: 4,
      '&:hover': {
        backgroundColor: 'white',
      },
      '&$focused': {
        backgroundColor: 'white',
      },
    },
    input: {
      fontFamily: 'roboto',
      paddingTop: 26,
      paddingLeft: 16,
      paddingBottom: 10,
      height: 16,
    },
    underline: {
      '&::before': {
        borderBottom: 'none',
      },
    },
    multiline: {
      height: 'auto',
      paddingTop: 24,
      paddingBottom: 8,
    },
    inputMultiline: {
      paddingLeft: 4,
    },
  },
  MuiSelect: {
    select: {
      fontFamily: 'roboto',
      textTransform: 'capitalize',
      minHeight: 16, // With padding & spaces...etc would be total 52px heihgt
      '&:focus': {
        backgroundColor: 'white',
      },
    },
    iconOpen: {
      transform: 'rotateX(180deg)',
    },
    selectMenu: {
      height: 0,
    },
    icon: {
      fontSize: 24,
      paddingRight: 12,
    },
  },
  MuiInput: {
    underline: {
      '&::before': {
        border: 'none',
      },
    },
  },
  MuiButton: {
    root: {
      color: palette.text.title,
      padding: '4px 12px',
    },
    label: {
      fontWeight: 'bold',
      fontSize: 14,
      textTransform: 'initial',
      '&:first-letter': {
        textTransform: 'initial',
      },
    },
    outlined: {
      borderColor: palette.background.light,
    },
    contained: {
      boxShadow: 'none',
    },
    startIcon: {
      marginRight: 16,
    },
  },
  MuiIconButton: {
    root: {
      padding: 9,
    },
  },
  MuiSvgIcon: {
    root: {
      fontSize: 14,
    },
    fontSizeSmall: {
      fontSize: '1.4rem',
    },
    fontSizeInherit: {
      color: 'white',
    },
  },
  MuiAlert: {
    standardError: {
      color: 'rgb(255, 255, 255)',
      backgroundColor: '#f85a40',
    },
    filledSuccess: {
      background: 'linear-gradient(120deg, #037EF3, #30C39E)',
    },
    filledError: {
      background: '#ff5236',
    },
  },
};

export default overrides;
