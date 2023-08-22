import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon, QuestionOutlineIcon, CopyIcon } from '@chakra-ui/icons'
import { useState } from 'react';

function ContentScript() {

  const [textReview, setTextReview] = useState(false)
  const [textOptimize, setTextOptimize] = useState(false)
  const [bgReview, setBgReview] = useState(false)
  const [bgOptimize, setBgOptimize] = useState(false)

  function handleReview(){
    setTextReview(true)
    setBgReview(true)
    setTextOptimize(false)
    setBgOptimize(false)
    const review = document.getElementById('review') as HTMLDivElement 
    const optimize = document.getElementById('optimize') as HTMLDivElement
    review.style.display = 'block'
    optimize.style.display ='none'
  }

  function handleOptimize(){
    setTextOptimize(true)
    setBgOptimize(true)
    setTextReview(false)
    setBgReview(false)
    const review = document.getElementById('review') as HTMLDivElement 
    const optimize = document.getElementById('optimize') as HTMLDivElement
    review.style.display = 'none'
    optimize.style.display ='block'
  }
 
  return (
    <>
    <Box border='1px' margin='2%' borderRadius='3xl' bg='white'>
    <Box id='nav' width='100%' alignContent='center'>
    <Grid 
        templateColumns='repeat(4, 1fr)' 
        gap={1}
       
        padding='1.5%'
        borderRadius='3xl'
        top='1'
        bg='white'
      >
        <GridItem w='100%' h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
            
          >
            <span><Text fontStyle='italic' fontWeight='bold'> Canaan </Text></span>
            <span style={{marginLeft : '12px'}}><Text 
            fontWeight='bold'>ChatGPT for Amazon Japan</Text></span>
          </Box>

          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <ExternalLinkIcon color='blue.500'/><span style={{marginLeft : '5px'}}><Text fontSize='12px'> Full Insights </Text></span>
            <QuestionOutlineIcon color='blue.500' marginLeft='20px'/><span style={{marginLeft : '5px'}}><Text 
            fontSize = '12px'
            >Help</Text></span>
          </Box>
            
        </GridItem>

        <GridItem marginLeft='5%' w='80%' h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <span><Text fontWeight='bold'> BO7C2T6789 </Text></span>
            <CopyIcon color='blue.500' marginLeft='10px'/>
          </Box>

          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <span><Text display="inline" fontSize='12px'> #9 in Gaming <Text display="inline" color='blue.500'>(See Top 100 in Gaming)</Text></Text>
              <br/>
              <Text fontSize='12px'> #1 in Esport</Text>
            </span>
            <br/>
            <span></span>
          </Box>

        </GridItem>

        <GridItem  w='120%' h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <span><Text> Reviews 17,792 </Text></span>
          </Box>

          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <Box
              as='button'
              height='30px'
              width='50%'
              borderRadius='20px'
              border='1px'
              fontSize='12px'
              lineHeight='1'
              display='inline-block'
              borderColor='blue.500'
              bg={textReview ? 'blue.500' : 'white'}
              textColor={bgReview ?  'white' : 'blue.500'}
              onClick={handleReview}
              
            >ChatGPT Review Analysis</Box>

            <Box
              as='button'
              height='30px'
              width='50%'
              borderRadius='20px'
              border='1px'
              fontSize='12px'
              lineHeight='1'
              display='inline-block'
              marginLeft='3%'
              borderColor='blue.500'
              bg={textOptimize ? 'blue.500' : 'white'}
              textColor={bgOptimize ? 'white' : 'blue.500'}
              onClick={handleOptimize}
            >ChatGPT Listing Optimization
            </Box>
          </Box>
            

        </GridItem>
        <GridItem marginLeft='40%' w='60%' h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <span><Text fontWeight='bold'> Advanced Tools </Text></span>
          </Box>

          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <Box
              as='button'
              height='30px'
              width='70%'
              borderRadius='20px'
              border='1px'
              fontSize='12px'
              lineHeight='1'
              display='inline-block'
              borderColor='blue.500'
              textColor='blue.500'
            >Add to Collection</Box>
        </Box>

        </GridItem>
      </Grid>
    </Box>
    
    <Box id='review' display='none' margin='1%'>
        <Grid 
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)' 
          gap={6}
          padding='1%'
          bg='#DEEAEE'
          borderRadius='3xl'
        >
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        

          </GridItem>
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
          
          </GridItem>
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>

          </GridItem>
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        
          </GridItem>
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        
          </GridItem>
          <GridItem shadow='md' borderRadius='2xl' w='100%' height='200' bg='white'>
          <Box padding='5%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        
          </GridItem>
        </Grid>
    </Box>

    <Box id='optimize' display='none' bg='#DEEAEE' borderRadius='3xl' width='98%' height='100%'  padding='1%' margin='1%'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper quis lectus nulla at volutpat diam ut venenatis. Faucibus nisl tincidunt eget nullam non nisi. Hac habitasse platea dictumst vestibulum. Volutpat consequat mauris nunc congue nisi vitae suscipit. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Massa massa ultricies mi quis hendrerit dolor. Egestas congue quisque egestas diam in. Diam volutpat commodo sed egestas egestas fringilla. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Libero id faucibus nisl tincidunt. Viverra orci sagittis eu volutpat odio facilisis mauris. Ullamcorper velit sed ullamcorper morbi tincidunt. Pretium lectus quam id leo in vitae turpis massa sed. Sed ullamcorper morbi tincidunt ornare. Libero volutpat sed cras ornare arcu dui vivamus.

    Condimentum id venenatis a condimentum vitae sapien. Feugiat vivamus at augue eget arcu dictum varius. Duis ultricies lacus sed turpis tincidunt. Malesuada fames ac turpis egestas maecenas pharetra convallis. Neque laoreet suspendisse interdum consectetur libero id faucibus. Enim ut tellus elementum sagittis vitae et leo. Leo a diam sollicitudin tempor id eu nisl. Tempus urna et pharetra pharetra massa. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Congue mauris rhoncus aenean vel elit. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Sapien et ligula ullamcorper malesuada proin libero nunc. Morbi tristique senectus et netus et malesuada fames ac turpis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Turpis massa sed elementum tempus egestas sed sed.

    Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Ultrices mi tempus imperdiet nulla. Ornare arcu odio ut sem. Sed nisi lacus sed viverra tellus in hac. Mauris a diam maecenas sed enim ut. Maecenas sed enim ut sem viverra aliquet eget sit amet. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Odio eu feugiat pretium nibh ipsum consequat nisl. Amet consectetur adipiscing elit ut. Viverra vitae congue eu consequat ac felis donec. At imperdiet dui accumsan sit. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Pellentesque nec nam aliquam sem et tortor. Et netus et malesuada fames ac turpis egestas sed tempus. Mollis nunc sed id semper risus in hendrerit. Euismod elementum nisi quis eleifend. Urna porttitor rhoncus dolor purus non. Non consectetur a erat nam at lectus urna.
        
    </Box>

    </Box>
    </>
  );
}

export default ContentScript;
