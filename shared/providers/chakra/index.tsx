"use client";

import {
  ChakraProvider as Provider,
  ChakraProviderProps,
} from "@chakra-ui/react";
import { theme } from "@/shared/styles/theme";

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <Provider theme={theme}>{children}</Provider>;
};
