import { Fragment } from "react";
import Image from "next/image";
import { SectionMaker } from "@/shared/utils/section-maker";
import { educationalHistory } from "@/features/home/constants/educational-history";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

const Education = async () => {
  return (
    <SectionMaker label="Education">
      <Flex flexDirection="column" gap={6}>
        {educationalHistory.map((history) => (
          <Fragment key={history.title}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              gap={{ base: 2, md: 6 }}
            >
              <Image
                width={60}
                height={60}
                src={history.logo}
                alt="Islamic Azad University's image"
                rel="preload"
                style={{
                  width: "60px",
                  height: "60px",
                  border: "2px solid white",
                  borderRadius: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <Flex width="100%" flexDirection="column" gap={2}>
                <Heading
                  size="md"
                  fontWeight="black"
                  display="inline-flex"
                  flexDirection={{ base: "column", md: "row" }}
                  justifyContent="space-between"
                  gap={2}
                >
                  {history.title}
                  <Text fontWeight="bold" fontSize={12} color="#9B9DA2">
                    {history.years}
                  </Text>
                </Heading>
                <Flex flexDirection="column">
                  <Text fontSize={14} textAlign="justify" color="#9B9DA2">
                    {history.college}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            {history.divider && (
              <Divider borderWidth={2} borderColor="#393939" />
            )}
          </Fragment>
        ))}
      </Flex>
    </SectionMaker>
  );
};

export default Education;
