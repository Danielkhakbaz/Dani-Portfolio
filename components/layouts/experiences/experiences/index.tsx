import ExperienceCard from "@/components/layouts/experiences/experiences/card";
import { FadeUp } from "@/components/utils/fade-up";
import { workExperiences } from "@/lib/constants/work-experiences";
import { MOTION_COMPONENT_DELAY } from "@/lib/constants";
import { Flex } from "@chakra-ui/react";

const Experiences = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      {workExperiences.map((experience) => (
        <FadeUp key={experience.company_name} delay={MOTION_COMPONENT_DELAY}>
          <ExperienceCard experience={experience} />
        </FadeUp>
      ))}
    </Flex>
  );
};

export default Experiences;
