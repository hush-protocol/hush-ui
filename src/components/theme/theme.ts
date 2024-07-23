
import { color, extendTheme, Heading } from '@chakra-ui/react';
import "@fontsource/plus-jakarta-sans";

const theme = extendTheme({
  styles: {
    global: {
      fonts: {
        heading: 'plus-jakarta-sans'
      },
      body: {
        bgColor: '#00020C'
      },
    },
  },
});

export default theme;