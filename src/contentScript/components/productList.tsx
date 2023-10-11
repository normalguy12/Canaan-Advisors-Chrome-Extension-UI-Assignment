import React from 'react'
import { useState } from 'react';
import { Box, Img, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
function ProductList() {

  const [receive, setReceive] = useState([] as any)

  chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.from == "background") {
      if (msg.first.length <= 4){
        setReceive(msg.first)
      }
      else{
        const temp = msg.first.slice(0,4)
        setReceive(temp)
      }
      //here you use the values as you wish, for example:
      //document.getElementById("anInput").value = first;
    }
  });

  const handleDelete = (e: any)=>{
    return (event: React.MouseEvent) => {
      chrome.runtime.sendMessage({ from: 'delete'})
      const temp = receive.filter(function(el: any){return el.IMG != e} )
      setReceive(temp)
      event.preventDefault();
      console.log(e)
    }
    
  }

  return (
    <>
      {receive?.map((comp: any)=>
          <Box width='20%' marginRight='2%' display='inline-block'>
            <Box
              alignContent='center'
              padding="5px"
              width='48px'
              height='100%'
            >
              
              {/* <img width='60px' height='50%' object-fit='contain' src={displayImage()}/> */}
              {/* {store.getState().imageGet.value.map((op: any)=><img width='48px' height='50%' object-fit='contain' src={op}/>)} */}
              {/* {data.map((product: any)=><img width='48px' height='20%' object-fit='contain' src={product.productImgUrl}/>)} */}
              {/* {test.map((op: any)=>op)} */}
              {/* {list.map(op=><img width='48px' height='20%' object-fit='contain' src={op}/>)} */}
              <CloseIcon cursor='pointer' onClick={handleDelete(comp.IMG)}/>
              {<Img width='48px' height='30%' object-fit='contain' src={comp.IMG}/>}          

            </Box>
            <Box
              alignItems='center'
              padding="5px"
              height='100%'
              fontSize='smaller'
            >
              <span><Text noOfLines={3} width='fit-content'>{comp.title}</Text></span>
            </Box>
          </Box>      
      )}
      
    </>
  )
}

export default ProductList