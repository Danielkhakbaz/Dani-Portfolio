"use client";

import { ReactNode } from "react";
import { MotionComponent } from "@/components/utils/motion";
import { MOTION_COMPONENT_DELAY } from "@/lib/constants";

type FadeUpProps = {
  delay?: number;
  duration?: number;
  children: ReactNode;
};

export const FadeUp = ({
  delay = 0,
  duration = MOTION_COMPONENT_DELAY,
  children,
}: FadeUpProps) => {
  return (
    <MotionComponent
      tag="div"
      initial="hidden"
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          y: -15,
        },
      }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </MotionComponent>
  );
};
