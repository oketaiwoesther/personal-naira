import React from 'react'
import football from '../asset/pexels-pixabay-2209 1.jpg'
import { Box, Heading, Text } from '@chakra-ui/react'

function HomeSection3() {
  return (
    <Box position={' relative' }>
        <img src={football} alt=''/>
        <Heading as={'h4'} position={'absolute'} top={'23rem'} right={'20rem'} textAlign={'center'} justifyContent={'center'} mx={'auto'} alignItems={'center'} >Five football matches you should not miss today</Heading>
        
    </Box>
    
  )
}

export default HomeSection3