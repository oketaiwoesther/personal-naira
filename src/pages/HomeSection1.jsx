import React from 'react'
import { Box, Button, Heading, Icon, Text } from '@chakra-ui/react';
import Lady from '../asset/Group 9272.jpg';
import { CiSearch } from 'react-icons/ci';

const HomeSection1 = () => {
  return (
    <Box
      backgroundImage={Lady}
      backgroundPosition={`center`}
      backgroundRepeat={`no-repeat`}
      opacity={`0.8`}
      h={`120vh`}
      p={`0 3rem`}
    >
      <Box
        display={`flex`}
        flexDir={`column`}
        justifyContent={`center`}
        alignItems={`center`}
        minH={`100vh`}
      >
        <Heading mt={`8rem`}>Welcome to Nairaland forum</Heading>
        <Text>We give the verified breaking news and current news</Text>
      </Box>
      <Box
        position={'absolute'}
        top={'33rem'}
        left={`10%`}
        // right={`50%`}
        display={`center`}
        justifyContent={'flex-start'}
        alignItems={'center'}
        mx={'auto'}
        border={'70px'}
        borderRadius={'5px'}
        boxShadow={`5px 5px 30px #fff`}
        backgroundColor={`#fff`}
        w={'80%'}
        h={`45px`}
        
      >
        <Icon
          as={CiSearch}
          border={'2rem'}
          ml={`1.6rem`}
          style={{translate: `0 .3rem`}}
          // style={{ margin: `0 1rem` }}
          // justifyContent={`center`}
          // display={'flex'}
         
          // alignItems={`center`}
          
        />
        <Box
        
          as={'input'}
          type={'text'}
          w={'75'}
          border={'0'}
          pl={'1rem'}

          borderRadius={'start'}
          placeholder='search'

        />
        <Button
          bg={'green.700'}
          fontSize={'14px'}
          px={'1rem'}
          borderRadius={'5px'}
          height={'30px'}
          w={'90px'}
          pos={`absolute`}
          right={`1rem`}
          top={`.5rem`}
          textAlign={`center`}
          color={`#fff`}
          // style={{translate: `820% 0`}}
        >subcribe</Button>
      </Box>
    </Box>

  )
}

export default HomeSection1












// import { Box, Button, Heading, Icon, Text } from '@chakra-ui/react';
// import Lady from '../asset/Group 9272.jpg';
// import { CiSearch } from 'react-icons/ci';
// export default function Home() {
//   return (
//     <Box
//       backgroundImage={Lady}
//       backgroundPosition={`center`}
//       backgroundRepeat={`no-repeat`}
//       opacity={`0.8`}
//       h={`100vh`}
//       p={`0 3rem`}
//     >
//       <Box
//         display={`flex`}
//         flexDir={`column`}
//         justifyContent={`center`}
//         alignItems={`center`}
//         minH={`100vh`}
//       >
//         <Heading mt={`2rem`}>Welcome to Nairaland forum</Heading>
//         <Text>We give the verified breaking news and current news</Text>
//       </Box>
//       <Box
//         position={'absolute'}
//         top={'40rem'}
//         justifyContent={'center'}
//         mx={'auto'}
//         justifyItems={'center'}
//         border={'70px'}
//         borderRadius={'5px'}
//         boxShadow={`2px 2px 10px #fff`}
//         backgroundColor={`#fff`}
//         w={'80'}
//       >
//         <Icon
//           as={CiSearch}
//           border={'2rem'}
//           style={{ margin: `0 auto` }}
//           justifyContent={`center`}
//           display={'flex'}
//         />
//         <Box
//           as={'input'}
//           type={'text'}
//           w={'75'}
//           border={'0'}
//           px={'3'}
//           borderRadius={'start'}
//           mx={'0 auto'}
//           placeholder='search'
//         />
//         <Button
//           bg={'green.700'}
//           fontSize={'4'}
//           px={'1'}
//           borderRadius={'2px'}
//           height={'25px'}
//           w={'70px'}
//         ></Button>
//       </Box>
//     </Box>
//   );
// }
