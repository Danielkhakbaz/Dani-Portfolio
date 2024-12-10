"use client";

import { ReactNode, ElementType } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

type MotionComponentProps = {
  tag: string;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
};

export const MotionComponent = ({
  tag,
  className,
  children,
  ...motionProps
}: MotionComponentProps) => {
  const Tag = m[tag as keyof typeof m] as ElementType;

  return (
    <LazyMotion features={domAnimation}>
      <Tag className={className} {...motionProps}>
        {children}
      </Tag>
    </LazyMotion>
  );
};
