import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { GrMenu } from "react-icons/gr";
import naira from "../../asset/Group 3.png"


const Navbar = () => {
    const [showMenu, setShowMenu] = useState('menu')

  const menuToggle = () => {
    if(showMenu === 'menu'){
        setShowMenu("menuActive menu");
    }else{
        setShowMenu('menu');
    }
  };
  return (
    <Box w="100%" maxWidth="1440px" background={"white"}>
      <Box
        w="90%"
        mx="auto"
        background={"white"}
        color="green"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img fontSize='2rem' src={naira} alt="" />
       
        <Box
          as={"ul"}
          listStyleType={"none"}
          justifyContent={"space-between"}
          rowGap={"3rem"}
          position={{ base: "absolute", lg: "relative" }}
          display={{ base: "absolute", lg: "flex" }}
          w={{ base: "100vw", lg: "60%" }}
          bg={{ base: "blue", lg: "none" }}
          mt={{ base: "23rem", lg: "0" }}
          className={showMenu}
        >
          <Text as={"li"} my={{ base: "1rem", lg: "" }}>
            Home
          </Text>
          <Text as={"li"} my={{ base: "1rem", lg: "" }}>
            Trending
          </Text>
          <Text as={"li"} my={{ base: "1rem", lg: "" }}>
            Recent
          </Text>
          <Text as={"li"} my={{ base: "1rem", lg: "" }}>
            New
          </Text>
        </Box>
        <Button backgroundColor={"blue"} color={"white"} p="1rem 3rem" m="2rem">
          Login
        </Button>
        <Icon
          as={GrMenu}
          color={"white"}
          fill={"white"}
          fontSize={"2rem"}
          display={{ base: "block", lg: "none" }}
          onClick={menuToggle}
          cursor={'pointer'}
        />
      </Box>
    </Box>
  );
};

export default Navbar;