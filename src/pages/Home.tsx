import { Box, Center, Container, Grid } from "@chakra-ui/react";

import GitHubAvatar from "../components/GitHubAvatar";
import LinkBox from "../components/LinkBox";
import PersonalInfo from "../components/PersonalInfo";
import { websites } from "../utils/links";

export default function Home() {
  return (
    <Box
      as="main"
      bgGradient="linear(to-tr, #1488CC, #2B32B2)"
      minHeight="100vh"
    >
      <Container maxWidth="container.sm">
        <Center flexDirection="column">
          <GitHubAvatar />
          <PersonalInfo />
          <Grid width="full" gap={4} marginTop={8}>
            {websites.map((website) => (
              <LinkBox
                key={website.websiteName}
                websiteUrl={website.websiteUrl}
                websiteName={website.websiteName}
              />
            ))}
          </Grid>
        </Center>
      </Container>
    </Box>
  );
}
