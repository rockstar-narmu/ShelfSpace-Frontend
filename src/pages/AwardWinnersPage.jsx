import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import "../styles/bestsellers.css"

const books = [
  {
    img: "assets/books/scifiBooks/book1.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book2.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book3.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book4.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book5.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book6.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book7.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book8.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book9.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book10.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book1.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book2.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book3.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book4.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book5.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book6.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book7.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book8.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book9.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/scifiBooks/book10.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  
  // ➕ Add more books here (total 50)
];

const AwardWinnersPage = () => {
  return (
    <Layout>
      <div className="main-grid">
        <Filters />

        <div className="products">
          <h1 className="bestsellers-title">Award Winners of the Year</h1>
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

export default AwardWinnersPage;
