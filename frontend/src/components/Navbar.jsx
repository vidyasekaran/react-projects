import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alighItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      ></Flex>
    </Container>
  );
};

export default Navbar;
