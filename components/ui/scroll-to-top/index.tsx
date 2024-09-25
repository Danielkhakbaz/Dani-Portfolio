"use client";

import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [
    displayAndCursorOfScrollToTopButton,
    setDisplayAndCursorOfScrollToTopButton,
  ] = useState(["none", "none"]);

  useEffect(() => {
    window.addEventListener("scroll", handleOpacityOfTheScrollToTopButton);

    return () => {
      window.removeEventListener("scroll", handleOpacityOfTheScrollToTopButton);
    };
  }, []);

  const handleOpacityOfTheScrollToTopButton = () => {
    const { scrollY, innerHeight } = window;

    if (scrollY > innerHeight / 8) {
      setDisplayAndCursorOfScrollToTopButton(["flex", "pointer"]);
    } else {
      setDisplayAndCursorOfScrollToTopButton(["none", "initial"]);
    }
  };

  const handleScrollToTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      width="78px"
      height="48px"
      aria-label="Scroll-to-top button"
      icon={<FaArrowAltCircleUp fontSize={30} />}
      color="white"
      colorScheme="whiteAlpha"
      onClick={handleScrollToTopButton}
      display={displayAndCursorOfScrollToTopButton[0]}
      position="fixed"
      bottom={{ md: "25px", lg: "75px" }}
      right={{ md: "25px", lg: "40px" }}
      textAlign="center"
      transition="0.3s"
      border="1px solid rgba(255, 255, 255, 0.075)"
      cursor={displayAndCursorOfScrollToTopButton[1]}
      zIndex={999}
    />
  );
};

export default ScrollToTop;
