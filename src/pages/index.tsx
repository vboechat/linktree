import GitHubAvatar from "@/components/GitHubAvatar";
import LinkBox from "@/components/LinkBox";
import PersonalInfo from "@/components/PersonalInfo";
import { Box, Center, Container, Grid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

export default function Home() {
  const websites = [
    {
      websiteName: "Website (Soon)",
      websiteUrl: "https://vboechat.github.io/",
    },
    {
      websiteName: "LinkedIn",
      websiteUrl:
        "https://www.linkedin.com/in/victor-ribeiro-boechat-641225238/",
    },
    {
      websiteName: "GitHub",
      websiteUrl: "https://www.github.com/vboechat",
    },
    {
      websiteName: "Dev.to",
      websiteUrl: "https://dev.to/vboechat",
    },
    {
      websiteName: "CodeTrace",
      websiteUrl: "https://codetrace.com/users/vboechat",
    },
  ];

  return (
    <>
      <NextSeo
        title="VBoechat - Link-tree"
        description="VBoechat personal link-tree"
      />
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
    </>
  );
}
