import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'

const Cart = () => {
  const [total,setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || []

   useEffect(()=>{
    const total = carts.reduce((acc,item)=>{
      return acc+(item.price*item.quantity)
    },0)
    setTotal(total)
   },[carts])
  

  return (
    <section className='container-fluid py-3' id="cart-container">
      <div className="d-flex justify-content-around align-items-center my-3">

      <h3 className>Shopping Cart</h3>
      <h3>{carts.length} items</h3>
      <h5>Total Cost:{total}</h5>
      </div>
      <hr />
      <div className="row text-center justify-content-center align-items-center">
        <div className="col-md-2">

        </div>
        <div className="col-md-2">
          QUANTITY
        </div>
        <div className="col-md-2">
          PRICE
        </div>
        <div className="col-md-2">
          TOTAL
        </div>
        <div className="col-md-2">
          Remove
        </div>
      </div>
      <hr />
     {
      carts.length===0 ? <h2 className='text-center my-5'>Cart is empty</h2> : carts.map(cart=>{
        return <CartItem key={cart.id} id={cart.id} image={cart.image} quantity={cart.quantity} price={cart.price}/>
      })
     }
     
    </section>
  )
}

export default Cart
