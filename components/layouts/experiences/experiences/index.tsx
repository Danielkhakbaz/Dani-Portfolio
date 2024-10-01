import ExperienceCard from "@/components/layouts/experiences/experiences/card";
import { MotionOpacity } from "@/components/utils/motion/opacity";
import { workExperiences } from "@/lib/constants/work-experiences";
import { Flex } from "@chakra-ui/react";

const MOTION_COMPONENT_DELAY = 0.5;

const Experiences = async () => {
  return (
    <Flex flexDirection="column" gap={4}>
      {workExperiences.map((experience, index) => (
        <MotionOpacity
          key={experience.company_name}
          delay={MOTION_COMPONENT_DELAY * (index + 1)}
        >
          <ExperienceCard experience={experience} />
        </MotionOpacity>
      ))}
    </Flex>
  );
};

export default Experiences;
