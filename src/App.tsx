import { Box, Typography } from "@mui/material";
import { MuiButton, MuiLink } from "./components";

function App() {
  return (
    <>
      <Typography variant="h1">Hello World!</Typography>
      <MuiButton color="default" size="small">
        Click me!
      </MuiButton>
      <MuiButton color="primary" size="small">
        Click me!
      </MuiButton>
      <MuiButton color="success" size="small">
        Click me!
      </MuiButton>
      <MuiButton color="error" size="small">
        Click me!
      </MuiButton>
      <Box>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
      </Box>
    </>
  );
}

export default App;
