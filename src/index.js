import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.scss';

import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/product.context';

import { CartIconProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartIconProvider>
            <App />
          </CartIconProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
