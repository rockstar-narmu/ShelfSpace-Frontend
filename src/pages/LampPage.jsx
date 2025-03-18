import React from 'react'
import Layout from '../components/Layout'
import "../styles/lamp.css";

export const LampPage = () => {
  return (
    <Layout>
      <div className="lamp-main-container">

        <p className="lamp-title">LED Reading Lights</p>
        <p className="lamp-punch-line">Light up your stories, even in the darkest nights!</p>

        <div className="lamp-grid-container">

          <div className="tablet-lamp">
            <img src="\assets\vectors\merchandise\lamp\tablet-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">LED Tablet Reading Light</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="arm-clip-on-lamp">
            <img src="\assets\vectors\merchandise\lamp\arm-clip-on-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Flexible Arm Clip-on Light</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="rechargeable-lamp">
            <img src="\assets\vectors\merchandise\lamp\rechargeable-lamp.webp" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Portable Mini Reading Light</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="neck-lamp">
            <img src="\assets\vectors\merchandise\lamp\neck-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Bendable Neck Reading Light</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          {/* <div className="aesthetic-lamp">
            <img src="\assets\vectors\merchandise\lamp\aesthetic-lamp.webp" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Cute Aesthetic Sticky Notes</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="shaped-lamp">
            <img src="\assets\vectors\merchandise\lamp\shaped-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Shaped Cute Sticky Notes</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="pull-out-lamp">
            <img src="\assets\vectors\merchandise\lamp\pull-out-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Pull Out Sticky Notes</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="lined-lamp">
            <img src="\assets\vectors\merchandise\lamp\lined-lamp.jpg" height={200} width={200}/>
            <div className="lamp-details">
              <p className="lamp-name">Multicolor Ruled Sticky Notes</p>
              <p className="lamp-availability">In Stock</p>
              <p className="lamp-price">Rs.200.00</p>

              <div className="lamp-add-to-cart">Add To Cart</div>
              <div className="lamp-buy-now">Buy Now</div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
