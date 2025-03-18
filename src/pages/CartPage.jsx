import React, { useState } from "react";
import Layout from '../components/Layout'
import "../styles/cart.css"

export const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      console.log("Delete Item"); // Replace this with your delete logic
    }
  };
    
  return (
    <Layout>
      <h1 className="cart-title">Shopping Cart</h1>
      <div className='total-cart-container'>

        <div className='cart-items-container'>

          <div className="cart-item">
            <div className='checkbox-column'>
              <div className='custom-checkbox'>
                <input type='checkbox'/>
              </div>
            </div>

            <div className='book-image-column'>
              <img src="https://m.media-amazon.com/images/I/81xtUuRY3ML.jpg" height={250} width={180} alt='book'/>
            </div>

            <div className='description-column'>
              <h2>A Court of Thorns and Roses</h2>
              <p>By Sarah J. Maas</p>
              <label>Paperback</label>
              <input type='checkbox'/>This will be a gift
              <div className='quantity-container'>
                <div className="delete-or-minus" onClick={handleDecrement}>
                  {quantity === 1 ? (
                    <img
                      src="/assets/icons/trash.png"
                      alt="Delete"
                      height="20"
                      width="20"
                    />
                  ) : (
                    "-"
                  )}
                </div>
                <div className="number-of-item">{quantity}</div>
                <div className="increment" onClick={handleIncrement}>
                  +
                </div>
              </div>
            </div>

            <div className='price-column'>
              <label>Rs. 300.00</label>
              <p>In Stock</p>
              <div className='delete-item'>Delete Item</div>
              <div className='save-for-later'>Save for later</div>
            </div>
          </div>

          <div className="cart-item">
            <div className='checkbox-column'>
              <div className='custom-checkbox'>
                <input type='checkbox'/>
              </div>
            </div>

            <div className='book-image-column'>
              <img src="https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg" height={250} width={180} alt='book'/>
            </div>

            <div className='description-column'>
              <h2>Harry Potter and the Philosopher's Stone</h2>
              <p>By J. K. Rowling</p>
              <label>Paperback</label>
              <input type='checkbox'/>This will be a gift
              <div className='quantity-container'>
                <div className="delete-or-minus" onClick={handleDecrement}>
                  {quantity === 1 ? (
                    <img
                      src="/assets/icons/trash.png"
                      alt="Delete"
                      height="20"
                      width="20"
                    />
                  ) : (
                    "-"
                  )}
                </div>
                <div className="number-of-item">{quantity}</div>
                <div className="increment" onClick={handleIncrement}>
                  +
                </div>
              </div>
            </div>

            <div className='price-column'>
              <label>Rs. 300.00</label>
              <p>In Stock</p>
              <div className='delete-item'>Delete Item</div>
              <div className='save-for-later'>Save for later</div>
            </div>
          </div>
        </div>

        <div className='cart-price-container'>
          <div className="inner-cart-price-container">
          <p className="add-for-free-delivery">Add items worth Rs.250 for free Delivery</p>
            <div className="progress-bar">
              <div className="one-half"></div>
              <div className="other-half"></div>
            </div>
            
            <div className="delivery-container">
              <img src="assets/icons/fast-delivery.png" height={40} width={40} alt="delivery"/>
              <p className="delivery-charge">Delivery Charge: Rs.50</p>
            </div>
            <h3>Subtotal(2 items): Rs.750</h3>
            <div className="proceed-to-buy">Proceed to buy</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
