"use client";

import { ReactNode } from "react";
import { MotionComponent } from "@/components/utils/motion";

type FadeUpProps = {
  delay?: number;
  duration?: number;
  children: ReactNode;
};

export const FadeUp = ({
  delay = 0,
  duration = 0.5,
  children,
}: FadeUpProps) => {
  return (
    <MotionComponent
      tag="div"
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -15,
      }}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay,
        type: "spring",
        duration,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </MotionComponent>
  );
};
