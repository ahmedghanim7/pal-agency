import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import millify from "millify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import ImagesScrollBar from "../../Components/ImagesScrollBar";
import { fetchAPI, baseURL } from "../../helpers/ApiInstance";

const PropertyDetails = () => {
  const [propertiesDetails, setPropertiesDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();

  const getData = async (id) => {
    if (id) {
      setIsLoading(true);
      await fetchAPI(`${baseURL}/properties/detail?externalID=${id}`)
        .then((response) => {
          setPropertiesDetails(response.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };
  useEffect(() => {
    getData(router.query.id);
  }, [router.query.id]);

  return (
    <Box my={"10"}>
      {propertiesDetails.photos && (
        <ImagesScrollBar propertyImages={propertiesDetails?.photos} />
      )}
      {!isLoading ? (
        <Box w={"full"} my="5">
          <Flex
            paddingTop={"2"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Flex alignItems="center">
              <Box>
                {" "}
                {propertiesDetails?.isVerified && (
                  <GoVerified color="green" />
                )}{" "}
              </Box>
              <Text fontWeight={"bold"} fontSize="lg">
                AED{" "}
                {propertiesDetails?.price && millify(propertiesDetails?.price)}
                {propertiesDetails?.rentFrequency &&
                  "/" + propertiesDetails?.rentFrequency}
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={"250px"}
            color="gray.700"
            alignItems="center"
            justifyContent={"space-between"}
          >
            {propertiesDetails?.rooms} <FaBed /> | {propertiesDetails?.baths}{" "}
            <FaBath /> |{" "}
            {propertiesDetails?.area && millify(propertiesDetails?.area)} sqft{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize={"lg"} fontWeight="bold">
            {propertiesDetails?.title}
          </Text>
          <Text my={"1.5"}>
            {!readMore
              ? propertiesDetails?.description?.substring(0, 200)
              : propertiesDetails?.description}
            <Text
              textDecoration={"underline"}
              fontWeight="bold"
              cursor={"pointer"}
              onClick={() => setReadMore((prev) => !prev)}
            >
              Read {readMore ? "Less" : "More"}
            </Text>
          </Text>
        </Box>
      ) : (
        <Flex h="60vh" justifyContent="center" alignItems={"center"}>
          <Spinner color="blue.500" size={"xl"} speed="0.5s" />
        </Flex>
      )}
    </Box>
  );
};

export default PropertyDetails;
