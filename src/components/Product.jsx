import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  
 
  return (
    <div className='col-lg-3 col-md-6 my-3'>
      <Link to={"/productdetails/"+product.id}>
      <div className="card shadow">
        <img src={product.image} alt="product" className='card-img-top'/>
        <div className="card-body">
            <h5 className='text-primary'>{product.category.toUpperCase()}</h5>
            <p className='fs-5 fw-bold'>${product.price}</p>
             
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Product
