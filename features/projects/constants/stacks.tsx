import { ReactElement } from "react";
import { FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiChakraui,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiDaisyui,
  SiPrisma,
  SiFramer,
  SiDrizzle,
} from "react-icons/si";

type StacksType = {
  [key: string]: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
    color: string;
  };
};

export const stacks: StacksType = {
  react: {
    icon: <FaReact />,
    label: "React.js",
    backgroundColor: "cyan.500",
    color: "white",
  },
  next: {
    icon: <SiNextdotjs />,
    label: "Next.js",
    backgroundColor: "gray.700",
    color: "white",
  },
  chakra: {
    icon: <SiChakraui />,
    label: "ChakraUI",
    backgroundColor: "teal.500",
    color: "teal.50",
  },
  tailwind: {
    icon: <SiTailwindcss />,
    label: "TailwindCSS",
    backgroundColor: "blue.800",
    color: "blue.200",
  },
  typescript: {
    icon: <SiTypescript />,
    label: "Typescript",
    backgroundColor: "blue.600",
    color: "white",
  },
  javascript: {
    icon: <SiJavascript />,
    label: "Javascript",
    backgroundColor: "yellow.400",
    color: "yellow.900",
  },
  daisyui: {
    icon: <SiDaisyui />,
    label: "DaisyUI",
    backgroundColor: "#5C15F9",
    color: "white",
  },
  prisma: {
    icon: <SiPrisma />,
    label: "Prisma",
    backgroundColor: "#153A51",
    color: "white",
  },
  framer: {
    icon: <SiFramer />,
    label: "Framer Motion",
    backgroundColor: "#E402B9",
    color: "black",
  },
  drizzle: {
    icon: <SiDrizzle />,
    label: "Drizzle",
    backgroundColor: "#BFEF4C",
    color: "black",
  },
};
