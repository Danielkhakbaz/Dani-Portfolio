import { FadeUp } from "@/components/utils/fade-up";
import { Text } from "@chakra-ui/react";

const Footer = async () => {
  return (
    <FadeUp>
      <Text fontSize={14} color="#9B9DA2" textAlign="center" marginY={4}>
        &copy;{new Date().getFullYear()} Danial Khakbaz. All Rights Reserved.
      </Text>
    </FadeUp>
  );
};

export default Footer;
