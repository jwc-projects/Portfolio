import { FunctionComponent, PropsWithChildren } from "react";
import StyledSection from "./style";
import { Box, BoxProps, useTheme } from "@mui/material";

export interface SectionProps extends BoxProps {
  imageSrc?: string;
  isInverted?: boolean;
  isFlex?: boolean;
}

const Section: FunctionComponent<PropsWithChildren<SectionProps>> = ({
  isInverted = false,
  isFlex = false,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <StyledSection
      component="section"
      paddingX={6}
      paddingY={8}
      {...props}
      isInverted={isInverted}
    >
      <Box
        display="block"
        maxWidth={theme.breakpoints.values.xl}
        margin="0 auto"
      >
        {children}
      </Box>
    </StyledSection>
  );
};

export default Section;
