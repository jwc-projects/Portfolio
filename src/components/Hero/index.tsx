import { FunctionComponent, PropsWithChildren } from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import StyledHeroBox, { StyledBlackOverlay } from "./style";
import SeparatorImage from "../../images/separatorWhite.png";

const Hero: FunctionComponent<PropsWithChildren<BoxProps>> = (props) => {
  return (
    <StyledHeroBox {...props}>
      <StyledBlackOverlay />
      <Typography component="h1" variant="h1" color="inverted.main" mb={2}>
        JW Web Services
      </Typography>
      <Box>
        <img src={SeparatorImage} role="presentation" />
      </Box>
    </StyledHeroBox>
  );
};

export default Hero;
