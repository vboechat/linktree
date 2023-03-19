import { ChakraTheme, extendTheme } from "@chakra-ui/react";

const customChakraTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Poppins, system-ui, sans-serif",
    body: "Poppins, system-ui, sans-serif",
  },
};

const theme = extendTheme(customChakraTheme);

export default theme;
