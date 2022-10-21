import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import React from "react";
import { LinkProps } from "@mui/material/Link";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
    error: { main: red.A400 },
  },
});

export default theme;
