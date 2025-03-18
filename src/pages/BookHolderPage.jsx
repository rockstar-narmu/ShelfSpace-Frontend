import React from 'react'
import Layout from '../components/Layout'
import "../styles/book-holder.css";

export const BookHolderPage = () => {
  return (
    <Layout>
      <div className="book-holder-main-container">

        <p className="book-holder-title">Book Holders</p>
        <p className="book-holder-punch-line">Hold your book, free your hands—read with ease!</p>

        <div className="book-holder-grid-container">

          <div className="adjustable-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\adjustable-book-holder.jpg" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Adjustable Bookends</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="portable-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\portable-book-holder.webp" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Portable Book Stand</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="wooden-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\wooden-book-holder.webp" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Wooden Book Holder</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="triangle-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\triangle-book-holder.jpg" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Triangle Wooden Book Rest</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="ring-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\ring-book-holder.webp" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Thumb Ring Book Holder</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="tsz-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\360-book-holder.webp" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">360° Adjustable Book Stand</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          {/* <div className="pull-out-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\pull-out-book-holder.jpg" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Pull Out Sticky Notes</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="lined-book-holder">
            <img src="\assets\vectors\merchandise\book-holder\lined-book-holder.jpg" height={200} width={200}/>
            <div className="book-holder-details">
              <p className="book-holder-name">Multicolor Ruled Sticky Notes</p>
              <p className="book-holder-availability">In Stock</p>
              <p className="book-holder-price">Rs.200.00</p>

              <div className="book-holder-add-to-cart">Add To Cart</div>
              <div className="book-holder-buy-now">Buy Now</div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}
