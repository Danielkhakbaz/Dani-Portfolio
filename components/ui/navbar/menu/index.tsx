"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/lib/constants/menu";
import {
  Link,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

export const WebMenu = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map(({ href, label }) => {
        const isActive = path === href || path.startsWith(`${href}/`);

        return (
          <Link
            as={NextLink}
            key={label}
            href={href}
            display="flex"
            flexDirection="column"
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              alignItems="center"
              transition="color 0.1s ease-in-out"
              _hover={{
                color: !isActive && "gray",
              }}
            >
              {label}
            </Flex>
            {isActive && (
              <motion.span
                layoutId="active"
                style={{
                  width: "100%",
                  border: "0.1rem solid #FFF",
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export const MobileMenu = () => {
  const path = usePathname();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        backgroundColor="black"
        variant="outline"
        color="white"
        _hover={{
          backgroundColor: "black",
        }}
        _active={{
          backgroundColor: "black",
        }}
        _focus={{
          backgroundColor: "black",
        }}
      />
      <MenuList backgroundColor="black">
        {menuItems.map(({ href, label, mobileIcon }) => {
          const isActive = path === href || path.startsWith(`${href}/`);

          return (
            <MenuItem
              key={label}
              as={NextLink}
              href={href}
              icon={mobileIcon}
              backgroundColor="black"
              color={isActive ? "#28AABC" : "#FFF"}
              _hover={{
                color: "#28AABC",
              }}
            >
              {label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
