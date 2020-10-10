import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffad6f",
      main: "#ff7c41",
      dark: "#c64c12",
      contrastText: "#fff",
    },
    secondary: {
      light: "#88cfcf",
      main: "#579e9e",
      dark: "#246f70",
      contrastText: "#000",
    },
    type: "dark",
  },
});

export default theme;
