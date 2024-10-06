"use client";

import { useState } from "react";
import ProjectCard from "@/components/layouts/projects/card";
import ProjectDrawer from "@/components/layouts/projects/drawer";
import { MotionOpacity } from "@/components/utils/motion/opacity";
import { projects } from "@/lib/constants/projects";
import { ProjectsType } from "@/types/projects";
import { Flex, Heading, Grid, useDisclosure } from "@chakra-ui/react";

const MOTION_COMPONENT_DELAY = 0.25;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectsType | null>(
    null
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectProject = (id: string) => {
    const theProject = projects.filter((project) => project.title === id)[0];

    setSelectedProject(theProject);

    onOpen();
  };

  return (
    <>
      <Flex
        flexDirection="column"
        filter="auto"
        transitionProperty="all"
        transitionDuration=".2s"
        gap={6}
      >
        <MotionOpacity delay={0.25}>
          <Heading>Projects</Heading>
        </MotionOpacity>
        <Grid
          minHeight={{ base: "1800px", md: "900px" }}
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: 2, md: 6 }}
        >
          {projects.map((project, index) => (
            <div
              key={MOTION_COMPONENT_DELAY * index}
              onClick={() => selectProject(project.title)}
            >
              <MotionOpacity delay={MOTION_COMPONENT_DELAY * (index + 1)}>
                <ProjectCard
                  imageSrc={project.images[project.icon].src}
                  alt={project.images[0].alt}
                  title={project.title}
                  description={project.description}
                />
              </MotionOpacity>
            </div>
          ))}
        </Grid>
      </Flex>
      {selectedProject && (
        <ProjectDrawer
          project={selectedProject}
          onClose={onClose}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default Projects;
