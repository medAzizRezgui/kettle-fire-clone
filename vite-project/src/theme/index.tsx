import "./fonts.css";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, darken } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "576px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1400px",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {},
    },
  },
  breakpoints,
  sizes: {
    container: {
      sm: "100%",
      md: "720px",
      lg: "920px",
      xl: "1140px",
      "2xl": "1340px",
    },
  },
  colors: {
    primary: "#aa131d",
    secondary: "#bbb",
    darkPink: "#D6C3B9",
    yellow: "#FAB944",
    darkBrown: "#DCA15B",
    brandDark: "#2B1A1A",
    brandCream: "#FFF9EE",
    black: "#000000",
    heroBg: "#FDB6B7",
    gray: "#FFF9EE",
    darkYellow: "#FFD996",
  },
  fonts: {
    heading: "sagona, sans-serif",
    body: "Montserrat, sans-serif;",
  },
  components: {
    Container: {
      variants: {
        responsive: {
          maxWidth: {
            sm: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
            "2xl": "container.2xl",
          },
        },
        fluid: {
          width: "100%",
          maxW: "100%",
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
        },
      },
    },
    Button: {
      variants: {
        primary: {
          display: "inline-flex",
          px: 12,
          py: 6,
          fontSize: "sm",
          background: "primary",
          color: "white",
          fontFamily: "montserrat",
          textTransform: "uppercase",
          fontWeight: "500",
          borderRadius: "8px",
          transition: "0.1s all ease-in",
          _hover: {
            background: darken("primary", 5),
          },
        },
      },
    },
    Heading: {
      variants: {
        title: {
          textAlign: "center",
          color: "brandDark",
          lineHeight: 1.2,
          fontWeight: 600,
          fontSize: "4xl",
        },
      },
    },
  },
});

export default theme;
