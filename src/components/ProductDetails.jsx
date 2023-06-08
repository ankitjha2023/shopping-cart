
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
 
   const addToCart = () =>{
    setAlert(true)
    setTimeout(()=>{
      setAlert(null)
    },1500)
   }


  return (
    product && <div className="container">
      
        <div className="alert-container">
          {

        
          alert &&  <div className="alert alert-primary" role="alert">
        Item added 
      </div>
}
        </div>
      

    <div className='row'>
    <div className="col-md-6 text-center">
      <img src={product.image} alt="product" className='img-fluid'  />
    </div>
      <div className="col-md-6 py-3">
          <h2>{product.title.toUpperCase()}</h2>
          <p>{product.description}</p>
          <b className='fs-4'>${product.price}$</b>
          <div className="d-flex gap-2 mt-3">
            <button className='btn btn-info' onClick={addToCart}>ADD TO CART</button>
            <Link to="/cart"><button className='btn btn-success' >BUY NOW</button></Link>
          </div>
      </div>
  </div>
  </div>
  )
}

export default ProductDetails
