import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function SUI() {
  return (
    <Container p={0} maxW="container.md">
      <Flex h="100vh">
        <VStack
          w={"full"}
          h="full"
          p={10}
          alignItems="flex-start"
          bg={"gray.50"}
        >
          <VStack alignItems="flex-start">
            <Heading size={"lg"}>Your details</Heading>
            <Text>If you are already have an acount click here to login.</Text>

            <SimpleGrid column={"2"} columnGap={"3"} rowGap={"6"} w="full">
              <GridItem colSpan={"1"}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="Ahmed" h={'8'}/>
                </FormControl>
              </GridItem>
              <GridItem colSpan={"1"}>
                <FormControl>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Ghanim" h={'8'} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={"2"}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="Roni St. Al-Mawasi" h={'8'} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={"1"}>
                <FormControl>
                  <FormLabel>City</FormLabel>
                  <Input placeholder="Khanyouns" h={'8'} />
                </FormControl>
              </GridItem>
              <GridItem colSpan={"1"}>
                <FormControl>
                <FormLabel>Country</FormLabel>

                  <Select h={'8'}>
                    <option value={"palestine"}>Palestine</option>
                    <option value={"jordan"}>Jordan</option>
                    <option value={"egypt"}>Egypt</option>
                    <option value={"algeria"}>Algeria</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={"2"}>
                <FormControl>
                  <Checkbox defaultChecked>Ship to billing address</Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={"2"}>
                <FormControl>
                  <Button size={"lg"} w={"full"}>
                    {" "}
                    Place Order
                  </Button>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>
        </VStack>

        <VStack
          w={"full"}
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg={"gray.200"}
        >
          <h1>Section two</h1>
        </VStack>
      </Flex>
    </Container>
  );
}
