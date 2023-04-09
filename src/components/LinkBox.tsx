import { Flex, Text } from "@chakra-ui/react";

type LinkBoxProps = {
  websiteName: string;
  websiteUrl: string;
};

const LinkBox = (linkProps: LinkBoxProps) => (
  <a href={linkProps.websiteUrl} target="_blank" rel="noreferrer">
    <Flex
      alignItems="center"
      backgroundColor="blue.200"
      rounded="lg"
      width="full"
      padding={3}
      cursor="pointer"
      display="inline-flex"
      transitionDuration="0.5s"
      _hover={{ backgroundColor: "blue.300" }}
    >
      <Text color="black" width="full" textAlign="center" fontSize="lg">
        {linkProps.websiteName}
      </Text>
    </Flex>
  </a>
);

export default LinkBox;
