import { Link as NextLink } from "next-view-transitions";
import { SectionMaker } from "@/components/utils/section-maker";
import { socials } from "@/lib/constants/socials";
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
