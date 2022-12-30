import { createTheme } from "@mui/material/styles";
import { breakpoints, colors } from "./site-config";

export const theme = createTheme({
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
