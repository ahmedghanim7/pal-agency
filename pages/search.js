import { Box, Flex, Icon, Text, Spinner } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BsFilter } from "react-icons/bs";
import { Property } from "../Components/Property";
import { SearchFilters } from "../Components/SearchFilters";
import { fetchAPI, baseURL } from "../helpers/ApiInstance";
const Search = () => {

  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async ({ query }) => {
    const purpose = query.purpose || "for-sale";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || 0;
    const maxPrice = query.maxPrice || 1000000;
    const sort = query.sort || "price-desc";
    const areaMax = query.areaMax || 35000;
    const roomsMin = query.roomsMin || 0;
    const bathsMin = query.bathsMin || 0;
    const locationExternalIDs = query.locationExternalIDs || "5002";
    const categoryExternalID = query.categoryExternalID || "4";

    setIsLoading(true);
    await fetchAPI(
      `${baseURL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&areaMax=${areaMax}&roomsMin=${roomsMin}&bathsMin=${bathsMin}&categoryExternalID=${categoryExternalID}`
    ).then((response) => {
      setIsLoading(false);
      setSearchResults(response.data.hits);
    })
    .catch(()=>{
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setSearchResults([]);
    getData(router);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Box>
          <Flex
            cursor={"pointer"}
            bg="blue.100"
            borderBottom={"1px"}
            borderColor="blue.600"
            p={2}
            fontWeight="bold"
            fontSize={"lg"}
            justifyContent="center"
            alignItems={"center"}
            onClick={() => setSearchFilters((prevState) => !prevState)}
          >
            <Text>Search By Filters</Text>
            <Icon paddingLeft={2} w={7} as={BsFilter}  />
          </Flex>
          {searchFilters && <SearchFilters />}
          {isLoading ? (
            <Flex alignItems={"center"} py="4" justifyContent="center">
              {" "}
              <Text
                fontWeight="bold"
                fontSize={"2xl"}
                fontFamily="heading"
                color="green.200"
              >
               <Flex 
                h='60vh'
                justifyContent='center'
                alignItems={'center'}
               >
               <Spinner color="blue.500" size={'xl'} speed='0.5s' />
               </Flex>
              </Text>
            </Flex>
          ) : (
            <Box>
              <Text fontSize={"2xl"} py="4" fontWeight={"bold"}>
                {" "}
                Property{" "}
                {router.query.purpose === "for-rent" ? "For Rent" : "For Sale"}
              </Text>
              <Flex flexWrap={"wrap"} justifyContent="center">
                {searchResults.length !== 0 ? (
                  searchResults?.map((property) => (
                    <Property property={property} key={property.id} />
                  ))
                ) : (
                  <Flex alignItems={"center"} justifyContent="center">
                    {" "}
                    <Text fontWeight="bold" fontSize={"lg"} color="red.500">
                      No Results{" "}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Box>
          )}
        </Box>
      </body>
    </>
  );
};

export default Search;

// else {
//   setIsLoading(true);

//   await fetchAPI(
//     `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent`
//   ).then((response) => {
//     setIsLoading(false);

//     setSearchResults(response.data.hits);
//     console.log(response.data.hits, "res.data");
//   });
