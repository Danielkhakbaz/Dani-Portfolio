import NextLink from "next/link";
import { SectionMaker } from "@/shared/utils/section-maker";
import { socials } from "@/features/home/constants/socials";
import { Flex, Link } from "@chakra-ui/react";

const Socials = async () => {
  return (
    <SectionMaker label="Socials">
      <Flex id="links" justifyContent="space-between" flexWrap="wrap" gap={2}>
        {socials.map((social) => (
          <Link
            as={NextLink}
            key={social.link}
            href={social.link}
            aria-label={`Danial Khakbaz's ${social.name}`}
            isExternal
            transition="transform 0.2s ease-in-out"
            _hover={{
              opacity: 0.85,
              transform: "translateY(-5px)",
            }}
          >
            {social.logo}
          </Link>
        ))}
      </Flex>
    </SectionMaker>
  );
};

export default Socials;
