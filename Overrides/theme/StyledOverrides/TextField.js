export default function TextField(theme) {
    return {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& fieldset': {
                borderColor: `${theme.palette.error.light  }!important`,
            }
          },
        },
      },
    };
  }
  