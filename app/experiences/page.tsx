import type { Metadata } from "next";
import Skills from "@/components/layouts/experiences/skills";
import Experiences from "@/components/layouts/experiences/experiences";
import { FadeUp } from "@/components/utils/fade-up";
import { MOTION_COMPONENT_DELAY } from "@/components/utils/fade-up";
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
        <FadeUp delay={MOTION_COMPONENT_DELAY}>
          <Divider borderWidth={2} borderColor="#393939" />
        </FadeUp>
        <Experiences />
      </Flex>
    </Flex>
  );
};

export default ExperiencesPage;
