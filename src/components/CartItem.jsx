import { useState } from 'react';

const CartItem = ({ id, image, quantity, price }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [showItem, setShowItem] = useState(true);

  const carts = JSON.parse(localStorage.getItem('cart')) || [];

  const handleIncrement = (id) => {
    const updatedCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCurrentQuantity(currentQuantity + 1);
  };

  const handleDecrement = (id) => {
    if (currentQuantity > 1) {
      const updatedCart = carts.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const removeProduct = (id) => {
    const updatedCart = carts.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setShowItem(false);
  };

  if (!showItem) {
    return null;
  }

  if(carts.length===0){
    return(
      <h3 className='py-3 text-center'>Cart is empty</h3>
    )
  }
  return (
    
    <div className="row justify-content-center align-items-center text-center cart-item my-2 py-3">
      <div className="col-md-2">
        <img src={image} alt="phone" className="img-fluid" width={70} />
      </div>
      <div className="col-md-2">
        <button onClick={() => handleDecrement(id)} className="btn fs-4">
          -
        </button>
        <span className="border p-2 text-success fw-bold">{currentQuantity}</span>
        <button onClick={() => handleIncrement(id)} className="btn fs-4">
          +
        </button>
      </div>
      <div className="col-md-2">${price}</div>
      <div className="col-md-2">${price * currentQuantity}</div>
      <div className="col-md-2">
        <button className="btn btn-sm btn-danger" onClick={() => removeProduct(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
