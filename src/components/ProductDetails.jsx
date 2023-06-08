
import { Link, useParams } from 'react-router-dom'

import { useEffect,useState } from 'react'
const ProductDetails = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [alert, setAlert] = useState(null)

  useEffect(()=>{
    const fetchProducts = async() =>{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProducts()
  },[id]) 
 
   const addToCart = (product) =>{

   
     
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const isProductExist = cart.find(item=>item.id===product.id)
    if(isProductExist){
      const updatedCart = cart.map(item=>{
        if(item.id===product.id){
          return {
            ...item,
            quantity:item.quantity+1
          }
        }
        return item
      })
      localStorage.setItem('cart',JSON.stringify(updatedCart))

    }else{
      localStorage.setItem('cart',JSON.stringify([...cart,{...product,quantity:1}]))
    }
   
   
    setAlert(true)
    setTimeout(()=>{
      setAlert(null)
    },1500)
   }


  return (
    product && <div className="container" id='product-details'>
      
        <div className="alert-container">
          {

        
          alert &&  <div className="alert alert-primary text-center fs-5 text-center" role="alert">
        Product added to cart 😍
      </div>
}
        </div>
      

    <div className='row' >
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <img src={product.image} alt="product" className='img-fluid'  />
    </div>
      <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
          <h2>{product.title.toUpperCase()}</h2>
          <p>{product.description}</p>
          <b className='fs-4'>${product.price}</b>
          <div className="d-flex gap-2 mt-3">
            <button className='btn btn-info' onClick={()=>addToCart(product)}>ADD TO CART</button>
            <Link to="/cart" ><button className='btn btn-success' onClick={()=>addToCart(product)}>BUY NOW</button></Link>
          </div>
      </div>
  </div>
  </div>
  )
}

export default ProductDetails
