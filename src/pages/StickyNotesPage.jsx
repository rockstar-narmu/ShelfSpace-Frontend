import React from "react";
import Layout from "../components/Layout";
import "../styles/sticky-notes.css";

export const StickyNotesPage = () => {
  return (
    <Layout>
      <div className="sticky-notes-main-container">

        <p className="sticky-notes-title">Sticky Notes</p>
        <p className="sticky-notes-punch-line">Mark your place, treasure your space!</p>

        <div className="sticky-notes-grid-container">

          <div className="cube-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\cube-sticky-notes.webp" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Multicolor Cube Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="strip-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\strip-sticky-notes.jpg" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Multicolor Strip Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="flag-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\flag-sticky-notes.webp" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Multicolor Flag Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="transparent-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\transparent-sticky-notes.jpg" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Transparent Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="aesthetic-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\aesthetic-sticky-notes.webp" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Cute Aesthetic Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="shaped-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\shaped-sticky-notes.jpg" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Shaped Cute Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="pull-out-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\pull-out-sticky-notes.jpg" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Pull Out Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>

          <div className="lined-sticky-notes">
            <img src="\assets\vectors\merchandise\sticky-notes\lined-sticky-notes.jpg" height={200} width={200}/>
            <div className="sticky-notes-details">
              <p className="sticky-notes-name">Multicolor Ruled Sticky Notes</p>
              <p className="sticky-notes-availability">In Stock</p>
              <p className="sticky-notes-price">Rs.200.00</p>

              <div className="sticky-notes-add-to-cart">Add To Cart</div>
              <div className="sticky-notes-buy-now">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
