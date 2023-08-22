import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentScript from './contentScript';
import { ChakraProvider } from '@chakra-ui/react';

const root = document.createElement("div")
root.className = "extensionContainer"
const parentNode = document.getElementById('ppd')
// document.getElementById('ppd')?.prepend(root)
parentNode?.prepend(root)

const rootDiv = ReactDOM.createRoot(root);

rootDiv.render(
  <React.StrictMode>
    <ChakraProvider>
      <ContentScript />
    </ChakraProvider>
  </React.StrictMode>
);