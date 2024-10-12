import { FadeUp } from "@/components/utils/fade-up";
import { skills } from "@/lib/constants/skills";
import { Flex } from "@chakra-ui/react";

const MOTION_COMPONENT_DELAY = 0.5;

export const Skills = async () => {
  return (
    <Flex
      width="100%"
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent={{ base: "flex-start", md: "space-between" }}
      gap={8}
    >
      {skills.map((skillComponent, index) => (
        <FadeUp
          key={MOTION_COMPONENT_DELAY * index}
          delay={MOTION_COMPONENT_DELAY + index * 0.1}
        >
          {skillComponent}
        </FadeUp>
      ))}
    </Flex>
  );
};

export default Skills;
