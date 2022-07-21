import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
}) => {
  return (
    <Flex
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent="center"
      m="20"
    >
      <Image
        src={
          "https://bayut-production.s3.eu-central-1.amazonaws.com/image/27679879/c7094e7e2f2c43a6a2f1c1bd65856171"
        }
        width={500}
        height={300}
        alt="banner"
      />
      <Box p={3}>
        <Text color={"gray.500"} fontSize="sm" fontWeight={"medium"}>
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight={"bold"}>
          {title1}
          <br /> {title2}{" "}
        </Text>
        <Text fontSize="lg" py={"3"} color="gray.700">
          {desc1} <br /> {desc2}
        </Text>
        <Button
          bg={"blue.300"}
          color="white"
          _hover={{ bg: "blue.500", transition: "0.5s all " }}
          fontSize="md"
        >
          {" "}
          <Link href={linkName}>{buttonText}</Link>{" "}
        </Button>
      </Box>
    </Flex>
  );
};
