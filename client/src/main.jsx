import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider desiredChainId={11155111}> 
      <StateContextProvider>
        <App />
      </StateContextProvider>
  </ThirdwebProvider> 
)
