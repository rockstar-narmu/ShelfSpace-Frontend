import React from "react";
import "../styles/filters.css"

const Filters = () => {
  return (
    <div className="filters">
      <h2>FILTERS</h2>

      <div className="customer-review">
        <label>Customer Review</label>
        <div className="stars">
          <input type="radio" name="review" /> 5 stars
        </div>
        <div className="stars">
          <input type="radio" name="review" /> 4 stars and above
        </div>
        <div className="stars">
          <input type="radio" name="review" /> 3 stars and above
        </div>
        <div className="stars">
          <input type="radio" name="review" /> 2 stars and above
        </div>
        <div className="stars">
          <input type="radio" name="review" /> 1 star
        </div>
      </div>

      <div className="pricing">
        <label>Pricing</label>
        <div className="stars">
          <input type="radio" name="price" /> Below Rs.100
        </div>
        <div className="stars">
          <input type="radio" name="price" /> Above Rs.100
        </div>
        <div className="stars">
          <input type="radio" name="price" /> Above Rs.500
        </div>
        <div className="stars">
          <input type="radio" name="price" /> Above Rs.1000
        </div>
        <div className="stars">
          <input type="radio" name="price" /> Above Rs.2500
        </div>
      </div>

      <div className="discount">
        <label>Discounts</label>
        <div className="stars">
          <input type="radio" name="discount" /> 10% Off or more
        </div>
        <div className="stars">
          <input type="radio" name="discount" /> 25% Off or more
        </div>
        <div className="stars">
          <input type="radio" name="discount" /> 35% Off or more
        </div>
        <div className="stars">
          <input type="radio" name="discount" /> 50% Off or more
        </div>
        <div className="stars">
          <input type="radio" name="discount" /> 70% Off or more
        </div>
      </div>

      <div className="book-format-type">
        <label>Book Format</label>
        <div className="stars">
          <input type="checkbox" name="format" /> Paperback
        </div>
        <div className="stars">
          <input type="checkbox" name="format" /> Hardcover
        </div>
        <div className="stars">
          <input type="checkbox" name="format" /> Kindle e-book
        </div>
        <div className="stars">
          <input type="checkbox" name="format" /> Audiobook
        </div>
        <div className="stars">
          <input type="checkbox" name="format" /> Stitched
        </div>
      </div>
    </div>
  );
};

export default Filters;
