"use client";

import { Tooltip, Button, useToast } from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa6";

const CopyClipboard = () => {
  const toast = useToast();

  const handleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      toast({
        title: "URL copied to clipboard!",
        status: "success",
        colorScheme: "green",
        duration: 1500,
      });
    } catch {
      toast({
        title: "Failed to copy URL to clipboard. Please try again.",
        status: "error",
        colorScheme: "red",
        duration: 1500,
      });
    }
  };

  return (
    <Tooltip hasArrow label="Copy to clipboard" backgroundColor="#FBD38D">
      <Button
        colorScheme="yellow"
        aria-label="copy-clipboard"
        onClick={handleClipboard}
      >
        <FaRegCopy />
      </Button>
    </Tooltip>
  );
};

export default CopyClipboard;
