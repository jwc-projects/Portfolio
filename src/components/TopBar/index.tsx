import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import MenuIcon from "@mui/icons-material/Menu";
import { MuiLink } from "../";
import StyledAppBar from "./style";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const TopBar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isScrollTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: theme.breakpoints.up("md") ? 56 : 48,
    target: window,
  });
  const transition = theme.transitions.create("all", {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.easeInOut,
  });
  const onToggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const DesktopBar = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="block">
        <LogoDevIcon fontSize="large" className="color-default" />
      </Box>
      <Box component="nav">
        <MuiLink
          href="/"
          isInverted={isScrollTriggered}
          transition={transition}
        >
          Home
        </MuiLink>
        <MuiLink
          href="/"
          isInverted={isScrollTriggered}
          transition={transition}
        >
          About
        </MuiLink>
        <MuiLink
          href="/"
          isInverted={isScrollTriggered}
          transition={transition}
        >
          Reviews
        </MuiLink>
      </Box>
    </Box>
  );
  const MobileBar = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <LogoDevIcon fontSize="large" className="color-default" />
      <IconButton
        className="color-default"
        onClick={onToggleMobileMenu}
        aria-label="Open menu"
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
  const MobileMenu = (
    <Box paddingX={2} paddingY={3} component="nav">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingBottom={1}
      >
        <LogoDevIcon fontSize="large" className="color-default" />
        <IconButton aria-label="Close menu" onClick={onToggleMobileMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        paddingTop={2}
      >
        <Box padding={1}>
          <MuiLink href="/" transition={transition}>
            Home
          </MuiLink>
        </Box>
        <Box padding={1}>
          <MuiLink href="/" transition={transition}>
            About
          </MuiLink>
        </Box>
        <Box padding={1}>
          <MuiLink href="/" transition={transition}>
            Reviews
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
  return (
    <>
      <StyledAppBar
        isElevated={isScrollTriggered}
        elevation={isScrollTriggered ? 4 : 0}
      >
        <Toolbar>{isDesktop ? DesktopBar : MobileBar}</Toolbar>
      </StyledAppBar>
      <Offset />
      {!isDesktop && (
        <Drawer
          anchor="top"
          container={window.document.body}
          variant="temporary"
          open={isOpen}
          onClose={onToggleMobileMenu}
          ModalProps={{ keepMounted: true }}
        >
          {MobileMenu}
        </Drawer>
      )}
    </>
  );
};

export default TopBar;
