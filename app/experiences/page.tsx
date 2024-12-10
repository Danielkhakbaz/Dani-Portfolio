import type { Metadata } from "next";
import Skills from "@/features/experiences/components/skills";
import Experiences from "@/features/experiences/components/experiences";
import { FadeUp } from "@/shared/utils/fade-up";
import { MOTION_COMPONENT_DELAY } from "@/shared/constants";
import { Flex, Heading, Divider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Experiences",
  description:
    "Here's the part that I show the stuff I learnt and the places I'd worked throughout these years.",
};

const ExperiencesPage = async () => {
  return (
    <Flex flexDirection="column" gap={8}>
      <FadeUp>
        <Heading>Skills & Experinces</Heading>
      </FadeUp>
      <Flex flexDirection="column" gap={8}>
        <Skills />
        <FadeUp delay={MOTION_COMPONENT_DELAY / 2}>
          <Divider borderWidth={2} borderColor="#393939" />
        </FadeUp>
        <Experiences />
      </Flex>
    </Flex>
  );
};

export default ExperiencesPage;
