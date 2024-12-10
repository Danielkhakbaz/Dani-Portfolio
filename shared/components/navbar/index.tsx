import { Link } from "next-view-transitions";
import Logo from "@/shared/components/navbar/logo";
import { WebMenu, MobileMenu } from "@/shared/components/navbar/menu";
import { Container, Flex } from "@chakra-ui/react";
import styles from "@/shared/components/navbar/styles.module.css";

const Navbar = async () => {
  return (
    <Container
      maxWidth="container.md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
    >
      <Flex width="25%" justifyContent="flex-start" alignItems="center">
        <Link
          href="/"
          className={styles.logo__link}
          aria-label="Danial Khakbaz's logo"
        >
          <Logo />
        </Link>
      </Flex>
      <Flex
        width="50%"
        display={{ base: "none", md: "flex" }}
        flexDirection="row"
        justifyContent="center"
        gap={6}
      >
        <WebMenu />
      </Flex>
      <Flex width="25%" justifyContent="flex-end" gap={2}>
        <Flex display={{ base: "flex", md: "none" }}>
          <MobileMenu />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
