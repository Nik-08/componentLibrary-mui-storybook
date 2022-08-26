import { ruRU } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const themeVariables = createTheme(
  {
    palette: {
      common: {
        white: "#fff",
        black: "#000",
      },
      primary: {
        main: "#800080",
        light: "#d45ed4",
        dark: "#460046",
        contrastText: "#fff",
      },

      secondary: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",

        contrastText: "#fff",
      },
    },
  },
  ruRU
);
