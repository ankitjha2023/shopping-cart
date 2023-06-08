import React from 'react'
import Products from './Products'

const Home = () => {
  return (
   <section id='home'>
        <div className="card text-bg-dark hero">
  <img src="https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg" className="card-img" alt="background" />
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </p>
    <p className="card-text">
      <small>Last updated 3 mins ago</small>
    </p>
  </div>


    </div>
    <h1 className='my-4 text-center'>Latest Products</h1>
    <Products/>
    </section>
  )
}

export default Home
