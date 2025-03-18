import React from "react";
import Layout from "../components/Layout";
import "../styles/bestsellers.css"
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

const books = [
  {
    id: 1,
    img: "assets/books/classicBooks/book1.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    id: 2,
    img: "assets/books/classicBooks/book2.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    id: 3,
    img: "assets/books/classicBooks/book3.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    id: 4,
    img: "assets/books/classicBooks/book4.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    id: 5,
    img: "assets/books/classicBooks/book5.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    id: 6,
    img: "assets/books/classicBooks/book6.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    id: 7,
    img: "assets/books/classicBooks/book7.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    id: 8,
    img: "assets/books/classicBooks/book8.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    id: 9,
    img: "assets/books/classicBooks/book9.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    id: 10,
    img: "assets/books/classicBooks/book10.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    id: 11,
    img: "assets/books/classicBooks/book11.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    id: 12,
    img: "assets/books/classicBooks/book12.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    id: 13,
    img: "assets/books/classicBooks/book13.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    id: 14,
    img: "assets/books/classicBooks/book14.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    id: 15,
    img: "assets/books/classicBooks/book15.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    id: 16,
    img: "assets/books/classicBooks/book16.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    id: 17,
    img: "assets/books/classicBooks/book17.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    id: 18,
    img: "assets/books/classicBooks/book18.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    id: 19,
    img: "assets/books/classicBooks/book19.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    id: 20,
    img: "assets/books/classicBooks/book10.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
];

const BestSellers = () => {
  return (
    <Layout>
      <div className="main-grid">
        {/* <div className="filters">
          <h2>FILTERS</h2> 

          <div className="customer-review">
            <label>Customer Review</label>

            <div className="stars">
              <input type="radio" name="review"/>5 stars
            </div>
            
            <div className="stars">
              <input type="radio" name="review"/>4 stars and above
            </div>

            <div className="stars">
              <input type="radio" name="review"/>3 stars and above
            </div>

            <div className="stars">
              <input type="radio" name="review"/>2 stars and above
            </div>

            <div className="stars">
              <input type="radio" name="review"/>1 star
            </div>
          </div>

          <div className="pricing">
            <label>Pricing</label>

            <div className="stars">
              <input type="radio" name="review"/>Below Rs.100
            </div>
            
            <div className="stars">
              <input type="radio" name="review"/>Above Rs.100
            </div>

            <div className="stars">
              <input type="radio" name="review"/>Above Rs.500
            </div>

            <div className="stars">
              <input type="radio" name="review"/>Above Rs.1000
            </div>

            <div className="stars">
              <input type="radio" name="review"/>Above Rs.2500
            </div>
          </div>

          <div className="discount">
            <label>Discounts</label>

            <div className="stars">
              <input type="radio" name="review"/>10% Off or more
            </div>
            
            <div className="stars">
              <input type="radio" name="review"/>25% Off or more
            </div>

            <div className="stars">
              <input type="radio" name="review"/>35% Off or more
            </div>

            <div className="stars">
              <input type="radio" name="review"/>50% Off or more
            </div>

            <div className="stars">
              <input type="radio" name="review"/>70% Off or more
            </div>
          </div>

          <div className="book-format-type">
            <label>Book Format</label>

            <div className="stars">
              <input type="checkbox" name="review"/>Paperback
            </div>
            
            <div className="stars">
              <input type="checkbox" name="review"/>Hardcover
            </div>

            <div className="stars">
              <input type="checkbox" name="review"/>Kindle e-book
            </div>

            <div className="stars">
              <input type="checkbox" name="review"/>Audiobook
            </div>

            <div className="stars">
              <input type="checkbox" name="review"/>Stitched
            </div>
          </div>
        </div> */}
        <Filters />
        
        <div className="products">
          <h1 className="bestsellers-title">Best Sellers of the Year</h1>
          <div className="product-container">
            {books.map((book) => (
              <Link to={`/book/${book.id}`} key={book.id} className="book-link"> {/* ✅ Navigate on click */}
                <div className="bookContainer">
                  <div className="top">
                    <div className="img-container">
                      <img src={book.img} alt={book.title} height={325} width={225} />
                    </div>
                    <p className="bookname">{book.title}</p>
                    <p className="author">{book.author}</p>
                  </div>
                  <div className="bottom">
                    <p className="price">{book.price}</p>
                    <p className="delivery">{book.delivery}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default BestSellers;
