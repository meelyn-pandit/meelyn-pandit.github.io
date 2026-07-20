// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.400",
      },
    },
  },
  colors: {
    brand: {
      50: "#e6fbf0",
      400: "#68d391",
      500: "#48bb78",
      600: "#38a169",
    },
  },
});

export default theme;
