import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { UserProvider } from './lib/use-auth-context'
import { CartContextWrapper } from './providers/cart-context-wrapper';
const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

root.render(
  <React.StrictMode>
    <UserProvider>
      <CartContextWrapper>
        <App />
      </CartContextWrapper>
    </UserProvider>
  </React.StrictMode>,
)
