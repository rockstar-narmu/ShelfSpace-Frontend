import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../styles/classicpage.css";
import Layout from "../components/Layout";

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

const ClassicPage = () => {
  return (
    <Layout>
      <div className="classicpage">
        <p className="classicHeader">Top 50 Classic Books</p>

        <div className="classicBooks">
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
    </Layout>
  );
};

export default ClassicPage;
