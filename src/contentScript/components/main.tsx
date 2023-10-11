import React, { useEffect } from 'react';
import { Box, Grid, GridItem, Text, Divider } from '@chakra-ui/react'
import { ExternalLinkIcon, QuestionOutlineIcon, CopyIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import fetchData from './getApi';
import ProductList from './productList';

let count = 0;
var x = [] as any
var port


function Main() {
  count++;
  const data = fetchData()

  const [receive, setReceive] = useState([] as any)

  let a = false

  const title = document.getElementById('productTitle')?.innerHTML

  // const image = document?.getElementById('imgTagWrapperId')?.getElementsByTagName('img')?.item(0)?.src;

  const currentURL = window.location.href;

  const check = data.find((element: any)=>currentURL?.includes(element.asin))?.productImgUrl

  for (var i = 0; i < data.length; i++){
    if (currentURL?.includes(data[i].asin)){
      chrome.runtime.sendMessage({ from: 'content', dataSend: {IMG: data[i].productImgUrl, title: data[i].productName}})
      break;

    }
  }

  // chrome.runtime.sendMessage({from:"content"}); //first, tell the background page that this is the tab that wants to receive the messages.

  // chrome.runtime.onMessage.addListener(function(msg) {
  //   if (msg.from == "background") {
  //     setReceive(msg.first)
  //     //here you use the values as you wish, for example:
  //     //document.getElementById("anInput").value = first;
  //     x = msg.first
  //   }
  // });


  return (
    <>
    <Box border='1px' borderRadius='2xl' bg='white'>
    <Box height='190px'id='nav' width='100%' alignContent='center'>
    <Grid 
        templateColumns='30% 50% 20%'
        gap={1}
       
        padding='1%'
        borderRadius='3xl'
        top='1'
        bg='white'
      >
        <GridItem h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            padding="5px"
            
          >
            <span><Text fontStyle='italic' fontWeight='bold'>QLAY</Text></span>
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
        
        <GridItem width='80%' h='80px' bg='white.500'>
          <ProductList/>
            

        </GridItem >
       
        <GridItem h='68px' bg='white.500'>
          <Box  
            display='flex'
            align-items= 'center'
            font-weight='600'
            cursor='pointer'
            padding="5px"
          >
            <span><Text fontWeight='bold'> Review Your Analysis </Text></span>
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
            >Analyze</Box>
        </Box>
        </GridItem>
        {/* <GridItem marginLeft='40%' w='60%' h='68px' bg='white.500'>
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

        </GridItem> */}
      </Grid>
    </Box>
    
   

    </Box>
    </>
  );
}

export default Main;
