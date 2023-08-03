import { Box, Button, Heading, Icon, Text } from "@chakra-ui/react";
import Lady from '../asset/Group 9272.jpg'
import {CiSearch} from 'react-icons/ci'
export default function Home() {
  return (
    <Box position='relative'>
      <img  src={Lady} alt="" />
      <Box position='absolute' top={'22rem'} textAlign={'center'} right={'25rem'} color={'white'}>
        <Heading>
          Welcome to Nairaland forum
        </Heading>
        <Text>
        We give the verified breaking news and current news
        </Text>

      </Box>
      <Box position={'absolute'} top={'40rem'} justifyContent={'center'} mx={'auto'} border={'10px'} borderRadius={'10px'} background={'yellow'}  w={'70'} >
        <Icon as={CiSearch} border={'2rem'} />
      <Box as={"input"} w={'100px'}  mx={'0 auto'} placeholder='search' />
      <Button bg={'green.700'} borderRadius={'2px'} height={'25px'} w={'70px'}></Button>
      </Box>
    </Box>
    

  
  )
}
