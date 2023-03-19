import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

type LinkBoxProps = {
  websiteName: string;
  websiteUrl: string;
};

const LinkBox = (linkProps: LinkBoxProps) => (
  <Link href={linkProps.websiteUrl} target="_blank">
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
  </Link>
);

export default LinkBox;
