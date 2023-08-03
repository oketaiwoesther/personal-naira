import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import Lady from "../asset/Group 9272.jpg";
import { CiSearch } from "react-icons/ci";
export default function Home() {
  return (
    <Box position="relative">
      <img src={Lady} alt="" />
      <Box
        position="absolute"
        top={"22rem"}
        textAlign={"center"}
        right={"25rem"}
      >
        <Heading>Welcome to Nairaland forum</Heading>
        <Text>We give the verified breaking news and current news</Text>
      </Box>
      <Box
        position={"absolute"}
        top={"40rem"}
        justifyContent={"center"}
        mx={"auto"}
        justifyItems={"center"}
        border={"70px"}
        borderRadius={"5px"}
        boxShadow={`2px 2px 10px #fff`}
        backgroundColor={`#fff`}
        w={"80"}
      >

        <Icon as={CiSearch} border={"2rem"} style={{margin : `0 auto`}} 
        justifyContent={`center`}
        display={'flex'}
        
        />
        <Box
          as={"input"}
          type={"text"}
          w={"75"}
          border={"0"}
          px={"3"}
          borderRadius={"start"}
          mx={"0 auto"}
          placeholder="search"
        />
        <Button
          bg={"green.700"}
          fontSize={"4"}
          px={"1"}
          borderRadius={"2px"}
          height={"25px"}
          w={"70px"}
        ></Button>
      </Box>
    </Box>
  );
}
