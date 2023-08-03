import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import naira from "../asset/Group 3.png";
import tinu1 from "../asset/Rectangle 27 (1).png";
import tinu2 from "../asset/Rectangle 27 (2).png";
import foot1 from "../asset/Rectangle 27 (1).png";
import foot2 from "../asset/Rectangle 27.png";

function Footer() {
  return (
    <Grid templateColumns="repeat(9, 1fr)" gap={6} bg="gray.700">
      <GridItem
        colSpan={6}
        w="100%"
        spacing="10"
        bg={"FFFFFF"}
        padding={"30px"}
      >
        <SimpleGrid
          spacing={"10px"}
          column={3}
          minChildWidth="250px"
          color={"white"}
        >
          <Box border={"1px solid white"} bg={"FFFFFF"} >
            <Image objectFit={"cover"} src={naira} alt="" />
            Nairaland is Africa’s largest discussion forum and Nigeria’s most
            popular website for the latest news across Africa, Created by
            Oluwaseun Osewa.
          </Box>
          <Box border={"1px solid white"} bg={"FFFFFF"}>
            <Text>LATEST POST</Text>
          </Box>
          <Box border={"1px solid white"} bg={"FFFFFF"}>
            TAGS
            <Text>
              Politics, Crime, Romance, Job/Vacancies, Career, Business,
              Investment, NYSC, Education, Autos, Car Talk, Properties, Health,
              Travel, Family, Culture, Religion, Food, Diaries, Nairaland Ads,
              Pets, Agriculture, Jokes, TV/Movies, Music/Radio, Celebrities.
              Fashion, Events, Sports, Gaming, Forum Games, Literature,
              Programming, Webmasters, Computers, Phones, Art, Graphics & Video,
              Technology Market.
            </Text>
          </Box>
        </SimpleGrid>
      </GridItem>
      <GridItem 
        as="main"
        colSpan={3}
        border={"1px solid white"}
        p={"40px"}
        w="100%"
        color={'white'}
        
      >NEWSLETTER
      <Text  gap={'2px'}>
      Subscribe to our newsletter to get unfiltered access to the latest information all across Africa
      
      </Text>
      <Text   paddingRight={'20px'}  borderBottom={'1px'}>your e-mail</Text>
      <Button >SUBSCRIBE</Button>
      
      
      </GridItem>

      <hr/>
    </Grid>
    //     <Grid templateColumns= 'repeat{5, 1fr}' bg={'gray.900'}>

    //     </Grid>
    // //     <Box backgroundColor={'#364039'} color={'#fff'}>
    //       <Grid templateColumns='repeat(5, 1fr)' gap={2}>
    //         <GridItem colSpan={4} border={"1px solid white"}>
    //   <SimpleGrid p={'10px'} minChildWidth={'250'} spacing={10} columns={2} spacingX='40px' spacingY='20px'>
    //   <Box   height='80px'>
    //     <Image objectFit={'cover'} src={'naira'} alt='' />
    //     <Text>Nairaland is Africa’s largest discussion forum and Nigeria’s most popular website for the latest news across Africa, Created by Oluwaseun Osewa.  </Text>
    //   <Box bg='Black'  height='80px'></Box>
    //   </Box>
    //   <Box bg='Black'  height='80px'></Box>
    // </SimpleGrid>
    //         </GridItem>
    //         <GridItem colSpan={1} border={"1px solid white"}>ddkjdkj</GridItem>
    //       </Grid>
    /* <Box  className='footerSection1Contents'>
          <Box  className='footerSection1ContentsInner'>
            <img src={naira} alt="" className='footerSection1ContentsInnerLogo'/>
            <p className='footerText'></p>
            <Box className='footerSection1--icons'   display={'flex'} columnGap={'2rem'}>
              <Text>
              Nairaland is Africa’s largest discussion forum and Nigeria’s most popular website for the latest news across Africa, Created by Oluwaseun Osewa.  
              </Text>
          
            </Box>
          </Box>

          <Box className='footerSection1ContentsInner'>
            <h2>LATEST POSTS</h2>
            <Box>
              <Image objectFit={"cover"} src={foot1 } alt='' />
              <Text>President Tinubu Restructure And Create New Federal Ministries </Text>
              <Text>July 28, 2023</Text>
            </Box>
            <Box>
              <img src={foot2} alt=''/>
              <Text>Tinubu To Be Disqualified, Re-run Between Obi And Atiku </Text>
              <Text>July 28, 2023</Text>
            </Box>
            <Box>
              <img src={tinu2} alt=''/>
              <Text>Stop Plugging Your Phone! Here’s Why </Text>
              <Text>July 27, 2023</Text>
            </Box>
        
          </Box>
          <Box className='footerSection1ContentsInner'>
            <h2>TAGS</h2>
            <Text>Career, Business, Investment, NYSC, Education, Autos, Car Talk, Properties, Health, Travel, Family, Culture, Religion, Food, Diaries, Nairaland Ads, Pets, Agriculture, Jokes, TV/Movies, Music/Radio, Celebrities. Fashion, Events, Sports, Gaming, Forum Games, Literature, Programming, Webmasters, Computers, Phones, Art, Graphics & Video, Technology Market.</Text>
            
          </Box>
        </Box>
        <hr style={{border:'1px solid grey'}}/>

        <Box className='footerSection1ContentsInner--2'>
          <Box>NEWSLETTER</Box>
          <Box className='innerFlex'>
            <Text>Subscribe to our newsletter to get unfiltered access to the latest information all across Africa</Text>
            <Box>
            <Text display={'flex'} borderBottom={'2px'}> your e-mail</Text>
            <Button color={'white'}>SUBSCRIBE</Button>
            </Box>
          </Box>
        </Box>
    </Box>
    // <Box> */
    /* //   <Box>
    //     <Box>
    //       <img src={naira} alt=''/>
    //       <Text>Nairaland is Africa’s largest discussion forum and Nigeria’s most popular website for the latest news across Africa, Created by Oluwaseun Osewa.  </Text>

    //     </Box>
    //     <Box>
    //     LATEST POSTS
         

    //     <Text>

    //     </Text>
    //     <Box>
    //       <img src={tinu1} alt=''/>
    //       <Text>
    //       President Tinubu Restructure And Create New Federal Ministries 
    //       </Text>
    //       <Box>
    //         <img src={tinu2} alt='' />
    //       </Box>
    //     </Box>
 
    //     </Box>
    //   </Box> */
    // </Box>
  );
}

export default Footer;
