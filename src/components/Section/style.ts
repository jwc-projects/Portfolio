import { ElementType } from "react";
import { Box, styled } from "@mui/material";
import { SectionProps } from ".";

const StyledSection = styled(Box, {
  shouldForwardProp: (name) => name !== "isInverted",
})<SectionProps & { component: ElementType }>(({ isInverted, theme }) => ({
  backgroundColor: isInverted
    ? theme.palette.default.main
    : theme.palette.inverted.main,
  color: isInverted
    ? theme.palette.default.contrastText
    : theme.palette.inverted.contrastText,
}));

export default StyledSection;
