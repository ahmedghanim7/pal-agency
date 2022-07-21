import {
  Box,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
export const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      margin={"auto"}
      borderBottom="1px"
      height={"14"}
      borderColor={"gray.400"}
    >
      <Heading color={"blue.400"} fontFamily="serif">
        <Link href={"/"}>PAL Agency</Link>
      </Heading>
      <Box color={"blue.600"}>
        <Menu>
          <MenuButton bg={"blue.100"} as={IconButton} icon={<FcMenu />} />
          <MenuList>
            <Link href={"/"} passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href={"/search"} passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href={"/search?puropse=for-sale"} passHref>
              <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
            </Link>
            <Link href={"/search?puropse=for-rent"} passHref>
              <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
