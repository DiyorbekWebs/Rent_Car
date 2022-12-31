import { createTheme } from "@mui/material/styles";
import { breakpoints, colors } from "./site-config";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          fontWeight: 500,
          lineHeight: "22px",
          letterSpacing: "0em",
        },
      },
      variants: [
        {
          props: {
            variant: "contained",
          },
          style: {
            color: colors.white,
            padding: "19px 40px",
            borderRadius: "100px",
          },
        },
        {
          props: {
            variant: "outlined",
          },
          style: {
            color: colors.black,
            padding: "19px 40px",
            borderRadius: "100px",
          },
        },
      ],
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: "36px",
      lineHeight: "44px",
    },
    p: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
      opacity: 0.75,
    },
    li: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  palette: {
      primary: {
      main: colors.primary,
    },
  },
  breakpoints: {
    values: {
      ...breakpoints,
    },
  },
});

export const ttheme = createTheme({
  palette: {
    mode: "dark",
  },
});
