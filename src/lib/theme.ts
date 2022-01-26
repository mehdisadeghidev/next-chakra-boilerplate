import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const colors = {};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  direction: 'rtl',
  config,
  colors,
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        overflowYScroll: true,
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1280px',
      },
    },
    Select: {
      baseStyle: {
        icon: {
          insetEnd: 'auto',
          insetStart: '0.5rem',
        },
      },
    },
  },
});

export default theme;
