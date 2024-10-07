"use client";

import { Link } from "next-view-transitions";
import { MotionOpacity } from "@/components/utils/motion/opacity";
import { Flex, Text, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(72, 187, 120, 0.7), 0 0 10px rgba(72, 187, 120, 0.5), 0 0 20px rgba(72, 187, 120, 0.4);
  }
  50% {
    transform: scale(1.25);
    box-shadow: 0 0 10px rgba(72, 187, 120, 0.9), 0 0 20px rgba(72, 187, 120, 0.7), 0 0 30px rgba(72, 187, 120, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px rgba(72, 187, 120, 0.7), 0 0 10px rgba(72, 187, 120, 0.5), 0 0 20px rgba(72, 187, 120, 0.4);
  }
`;

const Availability = () => {
  return (
    <MotionOpacity delay={1}>
      <Flex
        as={Link}
        href="#links"
        height="48px"
        display={{ md: "none", lg: "block" }}
        position="fixed"
        bottom={{ md: "25px", lg: "75px" }}
        right={{ md: "110px", lg: "125px" }}
        zIndex={999}
      >
        <Text
          fontFamily="monospace"
          fontSize={14}
          fontWeight="bold"
          height="100%"
          backgroundColor="rgba(255, 255, 255, 0.08)"
          display="inline-flex"
          alignItems="center"
          gap={2}
          border="1px solid rgba(255, 255, 255, 0.075)"
          borderRadius="0.375rem"
          cursor="pointer"
          transitionProperty="all"
          transitionDuration=".1s"
          paddingX={4}
          paddingY={2}
          _hover={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <Box
            as="span"
            width="0.625rem"
            height="0.625rem"
            backgroundColor="green.400"
            borderRadius="100%"
            animation={`${pulse} 1.75s infinite ease-in-out`}
          />
          Available for new projects
        </Text>
      </Flex>
    </MotionOpacity>
  );
};

export default Availability;
