import { Box } from '@chakra-ui/react'
import React from 'react'
import news from '../asset/image 6.jpg'
import people from '../asset/image 7.jpg'
import others from '../asset/image 4.jpg'

function HomeSection2() {
  return (
    <Box display={'flex'} alignItems={'center'} gap={'2px'}  flexDirection={'row'}>
        <Box >
        <img  width={'50px'} height={'100px'} src={others} alt=''/>
        <Box>
        <img width={'50px'}height={'100px'} src={news} alt=''/>
          <Box>
          <img width={'50px'}height={'100px'} src={people} alt=''/>

        </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default HomeSection2