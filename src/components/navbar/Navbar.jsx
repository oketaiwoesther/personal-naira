import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { GrMenu } from 'react-icons/gr';
import naira from '../../asset/Group 3.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState('menu');

  const menuToggle = () => {
    if (showMenu === 'menu') {
      setShowMenu('menuActive menu');
    } else {
      setShowMenu('menu');
    }
  };
  return (
    <Box
      w='100%'
      maxWidth='1440px'
      background={'white'}
      pos={`relative`}
      zIndex={`1000`}
       pl={`2rem`}
      //  pr={`-6rem`}
      
    >
      <Box
        w='100%'
        mx='auto'
        
        // background={"white"}

        color='green'
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        pos={`absolute`}
      >
        <img fontSize='2rem' src={naira} alt='' />

        <Box
          as={'ul'}
          listStyleType={'none'}
          justifyContent={'space-between'}
          rowGap={'3rem'}
          position={{ base: 'absolute', lg: 'relative' }}
          display={{ base: 'absolute', lg: 'flex' }}
          w={{ base: '100vw', lg: '60%' }}
          bg={{ base: '#f5f5f5', lg: 'none' }}
          mt={{ base: '23rem', lg: '0' }}
          className={showMenu}
        >
          <Text as={'li'} my={{ base: '1rem', lg: '' }} color={'green'}>
            Home
          </Text>
          <Text as={'li'} my={{ base: '1rem', lg: '' }} color={'green'}>
            Trending
          </Text>
          <Text as={'li'} my={{ base: '1rem', lg: '' }} color={'green'}>
            Recent
          </Text>
          <Text as={'li'} my={{ base: '1rem', lg: '' }} color={'green'}>
            New
          </Text>
        </Box>
        <Button backgroundColor={'blue'} color={'white'} p='1rem 3rem' m='2rem'>
          Login
        </Button>
        <Icon
          as={GrMenu}
          color={'white'}
          fill={'white'}
          fontSize={'2rem'}
          display={{ base: 'block', lg: 'none' }}
          onClick={menuToggle}
          cursor={'pointer'}
          // pl={`7rem`}
          style={{translate: `-4rem 0`}}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
