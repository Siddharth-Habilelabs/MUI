import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '0px 5px',
          borderRadius: '4px',
          fontSize: 14,
          border: '1px solid #1976D280',
          color: '#4482FF !important',
          fontWeight: '400 !important',
          '&:hover': {
            color: `${theme.palette.primary.contrastText}!important`,
            background: '#1976D280',
            border: '1px solid #1976D280 !important',
          },
          '&.MuiButton-filled': {
            backgroundColor: theme.palette.secondary.mainColor,
            color: `${theme.palette.primary.contrastText} !important`,
            border: `1px solid ${theme.palette.secondary.mainColor}`,
            '&:hover': {
              background: theme.palette.primary.dark,
              border: `1px solid ${theme.palette.primary.dark}`,
            },
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
