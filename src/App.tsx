import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import { Quote, Section, TopBar } from "./components";
import StarryNightImageLg from "./images/winter-night-sky-large.jpg";

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Section>
          <Typography component="h1" variant="h1">
            JW Web Services
          </Typography>
        </Section>
        <Section
          isInverted
          sx={{
            ".MuiSkeleton-root": {
              backgroundColor: "rgba(200, 200, 200, 0.41)",
              "&::after": {
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.04), transparent)",
              },
            },
          }}
        >
          <Box
            display="flex"
            alignItems={{ xs: "stretch", md: "center" }}
            columnGap={11}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Box flex="1 1 0">
              <Typography
                component="h2"
                variant="h2"
                color="default.contrastText"
                mb={2}
              >
                Responsive
              </Typography>
              <Typography component="p" color="default.contrastText" mb={2}>
                Investing in responsive web design is essential for your
                business's success in today's digital landscape. With users
                accessing websites from a variety of devices - smartphones,
                tablets, laptops - having a site that automatically adapts to
                different screen sizes ensures that all visitors have a
                seamless, positive experience.
              </Typography>
            </Box>
            <Box flex="1 1 0">
              <Skeleton animation="wave" variant="circular">
                <Avatar />
              </Skeleton>
              <Box
                display="flex"
                flexDirection="row"
                paddingTop={2}
                sx={{
                  columnGap: "calc(10%/5)",
                }}
              >
                <Skeleton
                  sx={{ flexBasis: "40%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "30%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "10%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                paddingTop={2}
                sx={{
                  columnGap: "calc(10%/5)",
                }}
              >
                <Skeleton
                  sx={{ flexBasis: "10%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "40%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "30%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                paddingTop={2}
                sx={{
                  columnGap: "calc(10%/5)",
                }}
              >
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "30%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "40%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "10%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
                <Skeleton
                  sx={{ flexBasis: "5%" }}
                  animation="wave"
                  variant="rounded"
                ></Skeleton>
              </Box>
              <Box>
                <Skeleton animation="wave" height={100}></Skeleton>
              </Box>
            </Box>
          </Box>
        </Section>
        <Section>
          <Box
            display="flex"
            alignItems="center"
            columnGap={11}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Box flex="1 1 0" mb={{ xs: 2, md: 0 }}>
              <img src={StarryNightImageLg} role="presentation" width="100%" />
            </Box>
            <Box flex="1 1 0">
              <Typography
                component="h2"
                variant="h2"
                color="inverted.contrastText"
                mb={2}
              >
                Professional
              </Typography>
              <Typography component="p" color="inverted.contrastText" mb={2}>
                In today's digital markets, a website is critical for any
                business looking to succeed. A website can act as a storefront
                showcasing your products and services 24/7. It builds
                credibility, giving your business legitimacy in the eyes of
                consumers who search online before making purchasing decisions.
                It can allow you to reach a wider audience, engage with your
                customers and generate leads. Not having a website is
                deliberately cutting out key opportunities to grow and compete
                in your business's market.
              </Typography>
            </Box>
          </Box>
        </Section>
        <Section isInverted>
          <Typography component="h2" variant="h2" mb={2} color="inveted.main">
            Reviews
          </Typography>
          <Box
            display="flex"
            columnGap={11}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box>
              <Quote
                title="Client Impressions"
                author="John Jenson, Director"
                isInverted
              >
                Justin went way above and beyond at [our client] to help them be
                successful. His efforts make a huge impact, and he has ben
                highly recognized by the client.
              </Quote>
              <Quote
                title="Accessibility"
                author="MeLisa Jobe, PM"
                alignment="right"
                isInverted
              >
                Our client had a 3rd party audit done for WCAG compliance and
                it's been challenging because of the timing against our launch
                overlapping 5 websites. Justin [took] ownership of the
                remediation handling triage, supporting and teaching others,
                providing clear daily updates and coordinating between our
                developers and the auditors. I can't say enough good things!
              </Quote>
            </Box>
            <Box>
              <Quote
                title="Teamwork"
                author="Stephen Burke, Solutions Architect"
                isInverted
              >
                Justin...was a driving force when it came to hitting milestone
                deliverable dates. I was thoroughly impressed with his ability
                to demo to stakeholders and explain even the most technical
                answers to non-technical folks. He will do whatever it takes to
                achieve the goals of the team.
              </Quote>
              <Quote
                title="Dependable Peer"
                author="Haowei Hsieh, Solutions Architect"
                alignment="right"
                isInverted
              >
                When he joined our team, it was obvious he'd found his calling.
                His greatest strengths are his reliability and proactive
                approach. He tackles complex problems with ease and provides
                feedback that helps us deliver top-notch results to our clients.
                He is an exception software developer whose skills in teamwork,
                problem-solving and attention to detail really stand out.
              </Quote>
            </Box>
          </Box>
        </Section>
      </main>
    </>
  );
}

export default App;
