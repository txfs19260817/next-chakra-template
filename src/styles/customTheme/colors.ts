import { DeepPartial, Theme, ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true
};

/** extend additional color here. You could refer to http://mkweb.bcgsc.ca/color-summarizer/?home */
const extendedColors: DeepPartial<Record<string, Theme["colors"]["blackAlpha"]>> = {
  primary: {
    50: "#7E98C7",
    100: "#4D6DA3"
  },
  secondary: {
    50: "#DFB74F",
    100: "#EDE354"
  },
  accent: {
    50: "#A5B2BE"
  },
  neutral: {
    50: "#231815"
  }
};

/** override chakra colors here. You could also refer to https://smart-swatch.netlify.app/ */
const overriddenChakraColors: DeepPartial<Theme["colors"]> = {
  blue: {
    50: "#e9f1ff",
    100: "#c8d5eb",
    200: "#a8b8d9",
    300: "#859cc6",
    400: "#6380b5",
    500: "#4a669c",
    600: "#39507a",
    700: "#273958",
    800: "#162238",
    900: "#030b19"
  },
  yellow: {
    50: "#fff6de",
    100: "#f5e5b8",
    200: "#ecd390",
    300: "#e4c167",
    400: "#dcb03d",
    500: "#c29623",
    600: "#977519",
    700: "#6c5310",
    800: "#423205",
    900: "#1a1100"
  }
};

const colors = {
  ...overriddenChakraColors,
  ...extendedColors
};

export default colors;
