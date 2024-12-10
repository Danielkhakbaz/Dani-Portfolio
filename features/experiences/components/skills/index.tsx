import { Fragment } from "react";
import { FadeUp } from "@/shared/utils/fade-up";
import { skills } from "@/features/experiences/constants/skills";
import { MOTION_COMPONENT_DELAY } from "@/shared/constants";
import { Flex } from "@chakra-ui/react";

const Skills = async () => {
  return (
    <FadeUp delay={MOTION_COMPONENT_DELAY / 2}>
      <Flex
        width="100%"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        justifyContent={{
          base: "space-between",
          md: "flex-start",
          lg: "space-between",
        }}
        gap={8}
      >
        {skills.map((skillComponent, index) => (
          <Fragment key={index}>{skillComponent}</Fragment>
        ))}
      </Flex>
    </FadeUp>
  );
};

export default Skills;
