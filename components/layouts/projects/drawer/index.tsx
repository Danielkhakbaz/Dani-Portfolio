"use client";

import { Fragment } from "react";
import Image from "next/image";
import { ProjectsType } from "@/lib/constants/projects";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Flex,
  Badge,
  Divider,
  Center,
} from "@chakra-ui/react";

type ProjectDrawerProps = {
  project: ProjectsType;
  onClose: () => void;
  isOpen: boolean;
};

const ProjectDrawer = ({ project, onClose, isOpen }: ProjectDrawerProps) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="lg">
      <DrawerOverlay />
      <DrawerContent backgroundColor="#110F0F">
        <DrawerCloseButton backgroundColor="white" color="black" />
        <DrawerHeader fontSize={24}>{project.title}</DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" gap={4}>
          <Text>{project.description}</Text>
          <Flex flexDirection="column" gap={2.5}>
            {project?.sections.map((section) => (
              <Fragment key={section.label}>
                <Flex alignItems="baseline" gap={4}>
                  <Badge
                    variant="outline"
                    colorScheme="orange"
                    style={{
                      fontSize: "14px",
                      textTransform: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {section.label}
                  </Badge>
                  {section.component}
                </Flex>
                {section.divider && <Divider borderColor="#393939" />}
              </Fragment>
            ))}
          </Flex>
          <Flex flexDirection="column" gap={6}>
            {project?.images.map((image) => (
              <Image
                key={image.alt}
                width={1200}
                height={400}
                src={image.src}
                alt={image.alt}
                rel="preload"
                priority
                fetchPriority="high"
                style={{
                  borderRadius: "0.4rem",
                }}
              />
            ))}
          </Flex>
          <Center fontSize={14}>
            Powered by{" "}
            <Badge
              fontSize={13}
              backgroundColor={project?.poweredBy.backgroundColor}
              color="white"
              display="flex"
              alignItems="center"
              gap={2}
              textTransform="none"
              marginLeft={2}
            >
              {project?.poweredBy.icon}
              {project?.poweredBy.label}
            </Badge>
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ProjectDrawer;
