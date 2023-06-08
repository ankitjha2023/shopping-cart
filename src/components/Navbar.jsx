import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [iconClass,setiConClass] = useState('bars')
  const toggleClass = ()  =>{
    if(iconClass==='bars'){
      setiConClass('xmark')
    }else{
      setiConClass('bars')
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid">
   <span className='fs-5'>Shopping Cart</span>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={toggleClass}
    >
     <i className={`fa-solid fa-${iconClass}`}></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/products">
            Products
          </Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
          
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>

  )
}

export default Navbar
