import React from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <section id='home'>
        <div className="card text-bg-dark hero">
  <img src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg" className="card-img" alt="background" />
  <div className="card-img-overlay d-flex flex-column  justify-content-center">
    <div className="col-md-6">
    <h2  className='display-5'>Shopping Cart</h2>
    <p className="fs-5">
    Discover the ultimate shopping experience right at your fingertips. We are thrilled to have you here, where convenience, variety, and exceptional service come together to redefine the way you shop.
    </p>
    <Link className="btn btn-outline-light" to="/products">Products</Link>
    </div>
   
  </div>


    </div>
    <h1 className='my-4 text-center'>Latest Products</h1>
    <Products/>
    </section>
  )
}

export default Home
