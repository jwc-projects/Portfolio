import { Box, styled } from "@mui/material";
import MountainDayImageLg from "../../images/mountain-day-large.jpg";

const StyledBlackOverlay = styled(Box)(() => ({
  background:
    "radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}));
const StyledHeroBox = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${MountainDayImageLg})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default StyledHeroBox;
export { StyledBlackOverlay };
