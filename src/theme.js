import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter"
  },
  palette: {
    primary: {
      light: "#8c74ec",
      main: "#664de5",
      dark: "#6331d6",
      contrastText: "#fff",
    },
  },
});

export default theme;