import { Link } from "next-view-transitions";
import { FadeUp } from "@/shared/utils/fade-up";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const NotFound = async () => {
  return (
    <Flex
      height="80vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      <Heading fontWeight="bold" size={{ base: "xl", md: "2xl" }}>
        <FadeUp>NOT FOUND!</FadeUp>
      </Heading>
      <Heading
        as="h3"
        fontWeight="extrabold"
        fontSize={{ base: "8rem", md: "15rem" }}
      >
        <FadeUp delay={0.25}>404</FadeUp>
      </Heading>
      <Flex flexDirection="column">
        <FadeUp delay={0.5}>
          <Link href="/">
            <Button colorScheme="yellow" gap={2}>
              Back to the Home <FaHome fontSize={18} />
            </Button>
          </Link>
        </FadeUp>
      </Flex>
    </Flex>
  );
};

export default NotFound;
