import React from "react";
import "../styles/scifipage.css";
import Layout from "../components/Layout";

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

const SciFiPage = () => {
  return (
    <Layout>
      <div className="scifipage">
        <p className="scifiHeader">Top 50 Sci-Fi Books</p>

        <div className="scifiBooks">
          {books.map((book, index) => (
            <div key={index} className="bookContainer">
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SciFiPage;
