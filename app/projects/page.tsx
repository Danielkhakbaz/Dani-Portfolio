import type { Metadata } from "next";
import Projects from "@/components/layouts/projects";

export const metadata: Metadata = {
  title: "Danial Khakbaz | Projects",
  description: "here's where all my projects are.",
};

const ProjectsPage = async () => {
  return <Projects />;
};

export default ProjectsPage;
