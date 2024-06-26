import { createTheme } from "@mui/material/styles";
// Theme for Material Ui
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5C715B",
      dark: "#5C715B",
    },
    secondary: {
      main: "#E09891",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    //   h1: {
    //     fontSize: "3rem",
    //     fontWeight: 600,
    //   },
    //   h2: {
    //     fontSize: "1.75rem",
    //     fontWeight: 600,
    //   },
    //   h3: {
    //     fontSize: "1.5rem",
    //     fontWeight: 600,
    //   },
  },
});
