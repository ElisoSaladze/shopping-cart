import React from 'react'
import { useCart } from '../../providers/cart-context'
import { Link } from 'react-router-dom'



export const Cart = () => {
    const {cart} = useCart()

    const totalQuantity = cart.reduce((total, product) => total + (product.quantity ?? 0), 0)
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <Link to="/cart-page/">Number of Items in Cart: {totalQuantity}</Link>
      </div>
    </div>
  )
}

