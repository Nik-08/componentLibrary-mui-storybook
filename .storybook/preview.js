import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));
