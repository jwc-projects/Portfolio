import { Box, Typography } from "@mui/material";
import { MuiButton, MuiLink, Quote, Section } from "./components";
import StarryNightImageLg from "./images/winter-night-sky-large.jpg";

function App() {
  return (
    <>
      <Section>
        <Typography variant="h1">Hello World!</Typography>
      </Section>
      <Section isInverted>
        <Box
          display="flex"
          alignItems="center"
          columnGap={11}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box flex="1 1 0">
            <img src={StarryNightImageLg} role="presentation" width="100%" />
          </Box>
          <Box flex="1 1 0">
            <Typography
              component="h2"
              variant="h2"
              color="default.contrastText"
              mb={2}
            >
              Title
            </Typography>
            <Typography component="p" color="default.contrastText" mb={2}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae vel laboriosam omnis, vitae hic ullam, eius suscipit
              optio nisi, doloremque numquam illum consequuntur corrupti? Cumque
              optio dolorem aliquam magnam eligendi!
            </Typography>
            <Box mb={2}>
              <Quote title="Lorem Ipsum" author="JW Consulting" isInverted>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                labore perspiciatis voluptatum temporibus fuga placeat minus
                suscipit. Omnis dignissimos nostrum, odit sunt quae iste est nam
                sapiente dicta minima praesentium?
              </Quote>
            </Box>
            <MuiLink href="/" mb={2} isInverted>
              Link to Content
            </MuiLink>
          </Box>
        </Box>
      </Section>
      <Section>
        <MuiButton color="default" size="small">
          Click me!
        </MuiButton>
        <MuiButton color="primary" size="medium">
          Click me!
        </MuiButton>
        <MuiButton color="success" size="large">
          Click me!
        </MuiButton>
        <MuiButton color="error" size="large">
          Click me!
        </MuiButton>
      </Section>
      <Section isInverted>
        <MuiLink href="/" isInverted>
          Link
        </MuiLink>
        <MuiLink href="/" isInverted>
          Link
        </MuiLink>
      </Section>
      <Section>
        <MuiLink href="/">Link</MuiLink>
        <MuiLink href="/">Link</MuiLink>
      </Section>
      <Section>
        <Quote title="Lorem Ipsum" author="JW Consulting">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, labore
          perspiciatis voluptatum temporibus fuga placeat minus suscipit. Omnis
          dignissimos nostrum, odit sunt quae iste est nam sapiente dicta minima
          praesentium?
        </Quote>
        <Quote title="Lorem Ipsum" author="JW Consulting" alignment="right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, labore
          perspiciatis voluptatum temporibus fuga placeat minus suscipit. Omnis
          dignissimos nostrum, odit sunt quae iste est nam sapiente dicta minima
          praesentium?
        </Quote>
      </Section>
    </>
  );
}

export default App;
