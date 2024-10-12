"use client";

import { ReactNode } from "react";
import { MotionComponent } from "@/components/utils/motion";
import { useMediaQuery } from "@chakra-ui/react";

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
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  if (isLargerThan768) {
    return (
      <MotionComponent
        tag="div"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: 15,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
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
  } else {
    return children;
  }
};
