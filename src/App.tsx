import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProductsPage from '../src/pages/products/index'
import ProductsDetailsPage from './pages/details';
import CartPage from './pages/cart-page';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/cart-page/" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
