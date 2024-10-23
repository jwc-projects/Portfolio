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
      <Box component="nav">TODO: Add links</Box>
    </Box>
  );
  const MobileBar = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="block">
        <LogoDevIcon fontSize="large" className="color-default" />
      </Box>
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
      <Box display="flex" justifyContent="space-between">
        <Box display="block">
          <LogoDevIcon fontSize="large" className="color-default" />
        </Box>
        <IconButton aria-label="Close menu" onClick={onToggleMobileMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box display="flex" flexDirection="column" justifyContent="flex-end">
        TODO: Add links
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
