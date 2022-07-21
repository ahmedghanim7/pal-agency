import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DefaultImagee from "../assets/images/home.jpg";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";

import millify from "millify";
export const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    externalID,
    isVerified,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap={"wrap"}
        w="360px"
        p={5}
        paddingTop="0"
        justifyContent={"flex-start"}
        cursor="pointer"
      >
        <Box>
          <Image
            src={coverPhoto?.url ? coverPhoto.url : DefaultImagee}
            alt="property"
            width={350}
            height={260}
          />
        </Box>

        <Box w={"full"}>
          <Flex
            paddingTop={"2"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Flex alignItems="center">
              <Box> {isVerified && <GoVerified color="green" />} </Box>
              <Text fontWeight={"bold"} fontSize="lg">
                AED {millify(price)}
                {rentFrequency && "/" + rentFrequency}
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={"250px"}
            color="blue.400"
            alignItems="center"
            justifyContent={"space-between"}
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize={"md"}>
            {title.length > 30 ? title.substring(0, 30) : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};
