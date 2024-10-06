import { ReactElement } from "react";

export type ProjectsType = {
  title: string;
  description: string;
  icon: number;
  images: {
    src: string;
    alt: string;
  }[];
  poweredBy: {
    label: string;
    icon: ReactElement;
    backgroundColor: string;
  };
  sections: {
    label: string;
    component: ReactElement;
    divider?: boolean;
  }[];
};
