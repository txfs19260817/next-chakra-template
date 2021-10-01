import { extendTheme } from "@chakra-ui/react";

import colors, { config } from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Button
  }
});

export default customTheme;
