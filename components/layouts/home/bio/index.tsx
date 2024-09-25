import SectionMaker from "@/components/ui/section-maker";
import { bioSections } from "@/lib/constants/bio";
import { Flex, Heading, Text } from "@chakra-ui/react";

type SectionCreatorProps = {
  year: number | string;
  content: string;
};

const SectionCreator = async ({ year, content }: SectionCreatorProps) => {
  return (
    <Flex alignItems="baseline" gap={4}>
      <Heading size="sm">{year}</Heading>
      <Text>{content}</Text>
    </Flex>
  );
};

const Bio = async () => {
  return (
    <SectionMaker label="Bio">
      <Flex flexDirection="column" gap={2}>
        {bioSections.map(({ year, content }) => (
          <SectionCreator key={year} year={year} content={content} />
        ))}
      </Flex>
    </SectionMaker>
  );
};

export default Bio;
