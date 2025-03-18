import React from "react";
import "../styles/kidspage.css";
import Layout from "../components/Layout";

const books = [
  {
    img: "assets/books/kidsBooks/book1.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book2.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book3.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book4.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book5.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book6.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book7.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book8.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book9.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book10.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book11.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book12.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book13.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book14.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book15.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book16.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book17.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book18.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book19.jpg",
    title: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr.",
    price: "₹180.00",
    delivery: "₹25 in Delivery",
  },
  {
    img: "assets/books/kidsBooks/book20.jpg",
    title: "Where the Wild Things Are",
    author: "Maurice Sendak",
    price: "₹350.00",
    delivery: "₹60 in Delivery",
  },
  
  // ➕ Add more books here (total 50)
];

const KidsPage = () => {
  return (
    <Layout>
      <div className="kidspage">
        <p className="kidsHeader">Top 50 Books for Kids</p>

        <div className="kidsBooks">
          {books.map((book, index) => (
            <div key={index} className="kidsbookContainer">
              <div className="top">
                <div className="kids-img-container">
                  <img src={book.img} alt={book.title} height={300} width={200} />
                </div>
                <p className="kids-bookname">{book.title}</p>
                <p className="kids-author">{book.author}</p>
              </div>

              <div className="bottom">
                <p className="kids-price">{book.price}</p>
                <p className="kids-delivery">{book.delivery}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default KidsPage;
