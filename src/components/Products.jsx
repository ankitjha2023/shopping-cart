import React, { useEffect, useState } from 'react'
import Product from './Product'



const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async() =>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchProducts()
  },[])
   
  return (
    <section className='container my-5' id='products'>
        <div className="row">
            {
                 products.map((product)=>{
                    return <Product key={product.id} product={product}/>
                 })
            }
        </div>
      
    </section>
  )
}

export default Products
