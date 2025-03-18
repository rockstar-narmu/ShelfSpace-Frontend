import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/bookdetails.css";
import BookTypes from "../components/BookTypes";

const books = [
  {
    id: 1,
    img: "/assets/books/classicBooks/book1.jpg",
    title: "The Grumpy Monkey",
    author: "Suzanne Lang",
    price: "₹243.00",
    delivery: "₹40 in Delivery",
    description: "A fun and engaging story about emotions.",
    format: "Paperback",
    pages: 400,
    language: "English",
    publication: "Blueberry Publications",
    year: 2014,
    country: "America",
    weight: "0.56 grams",
    dimensions: "24 x 5 x 40",
    isbn: "987-123456789",
    type: "Standalone"
  },
  {
    id: 2,
    img: "/assets/books/classicBooks/book2.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    price: "₹199.00",
    delivery: "₹30 in Delivery",
    description: "A classic children's book about growth and change.",
    format: "Hardcover",
    pages: 32,
    language: "English",
    publication: "Penguin Books",
    year: 1969,
    country: "UK",
    weight: "0.3 grams",
    dimensions: "22 x 4 x 30",
    isbn: "987-654321098",
    type: "Series"
  },
  {
    id: 3,
    img: "/assets/books/classicBooks/book3.jpg",
    title: "Goodnight Moon",
    author: "Margaret Wise Brown",
    price: "₹299.00",
    delivery: "₹50 in Delivery",
    description: "A bedtime story loved by generations.",
    format: "Board book",
    pages: 48,
    language: "English",
    publication: "HarperCollins",
    year: 1947,
    country: "USA",
    weight: "0.45 grams",
    dimensions: "20 x 3 x 25",
    isbn: "987-112233445",
    type: "Standalone",
  }
];


const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from URL
  const book = books.find((b) => b.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!book) {
    return <h2>Book not found</h2>;
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <Layout>
      <div className="book-details">
        <div className="main-container">

          <div className="book-img-container">
            <img src={book.img} height={400} width={300} alt="book"/>
          </div>

          <div className="description">
            <p className="bookTitle">{book.title}</p>
            <p className="bookAuthor">By {book.author}</p>

            <div className="details">
              {/* <div className="format">
                <img src="/assets/icons/description/application.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Format</b><br/>
                  <span>{book.format}</span></label>
                </div>
              </div> */}

              <div className="pages">
                <img src="/assets/icons/description/book.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Pages</b><br/>
                  <span>{book.pages}</span></label>
                </div>
              </div>

              <div className="language">
                <img src="/assets/icons/description/languages.png" height={40} width={40} alt="format"/> 
                <div className="spec">
                  <label><b>Language</b><br/>
                  <span>{book.language}</span></label>
                </div>
              </div>

              <div className="publication">
                <img src="/assets/icons/description/office-building.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Publication</b><br/>
                  <span>{book.publication}</span></label>
                </div>
              </div>

              <div className="year">
                <img src="/assets/icons/description/calendar.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Year of Publication</b><br/>
                  <span>{book.year}</span></label>
                </div>
              </div>

              <div className="country">
                <img src="/assets/icons/description/countries.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Country of Origin</b><br/>
                  <span>{book.country}</span></label>
                </div>
              </div>

              <div className="weight">
                <img src="/assets/icons/description/balance.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Weight</b><br/><span>{book.weight}</span></label>
                </div>
              </div>

              <div className="dimensions">
                <img src="/assets/icons/description/dimensions.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Dimensions</b><br/><span>{book.dimensions}</span></label>
                </div>
              </div>
              <div className="isbn">
                <img src="/assets/icons/description/hash.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>ISBN</b><br/><span>{book.isbn}</span></label>
                </div>
              </div>

              <div className="format">
                <img src="/assets/icons/description/number.png" height={40} width={40} alt="format"/>
                <div className="spec">
                  <label><b>Book Type</b><br/>
                  <span>{book.type}</span></label>
                </div>
              </div> 
            </div>
          </div>

          <div className="cart-container">
            <p className="cartPrice">₹{(parseFloat(book.price.replace("₹", "")) * quantity).toFixed(2)}</p>
            <p className="stock">In stock</p>
            <div className="quantity">
              <div className={`minus ${quantity === 1 ? "disabled" : ""}`} onClick={decreaseQuantity}>-</div>
              <div className="number">{quantity}</div>
              <div className="plus" onClick={increaseQuantity}>+</div>
            </div>
            <div className="addToCart">Add to Cart</div>
            <div className="buyNow">Buy Now</div>
            <div className="wishList">Add to Wishlist</div>
          </div>
        </div>

        {/* <div className="book-type-container">
          <h3>Choose the Book type:</h3>
          <div className="book-types">
            <div className="paperback">
              <img src="/assets/icons/book-types/open-book.png" height={80} width={80} />
              <div>
                <p className="type-of-book">Paperback</p>
                <p className="isAvailable">In stock</p>
                <p className="book-type-price">Rs.299.00</p>
              </div>
            </div>
            <div className="hardcover"> 
              <img src="/assets/icons/book-types/book (3).png" height={80} width={80} />
              <div>
                <p className="type-of-book">Hardcover</p>
                <p className="isAvailable">In stock</p>
                <p className="book-type-price">Rs.580.00</p>
              </div>
            </div>
            <div className="ebook">
              <img src="/assets/icons/book-types/ebook (1).png" height={80} width={80} />
              <div>
                <p className="type-of-book">E-Book</p>
                <p className="isAvailable">Available</p>
                <p className="book-type-price">Rs.190.00</p>
              </div>
            </div>
            <div className="audiobook">
              <img src="/assets/icons/book-types/audiobook (1).png" height={80} width={80} />
              <div>
                <p className="type-of-book">Audiobook</p>
                <p className="isAvailable">Not Available</p>
                <p className="book-type-price">Rs.100.00</p>
              </div>
            </div>
          </div>
        </div> */}
        <BookTypes></BookTypes>

        <div className="details-container">
          <div className="aboutTheBook">
            <p className="aboutTitle">About the Book</p>
            <p className="about-the-book">&emsp;&emsp;Goodnight Moon is an American children's book written by Margaret Wise Brown and illustrated by Clement Hurd. It was published on September 3, 1947, and is a highly acclaimed bedtime story. This book is the second in Brown and Hurd's "classic series," which also includes The Runaway Bunny and My World. The three books have been published together as a collection titled Over the Moon.</p>
          </div>

          <div className="aboutTheAuthor">
            <p className="authorTitle">About the Author</p>
            <div className="author-part">
              <img src="https://www.silverdolphinbooks.com/wp-content/uploads/2019/03/MWB_3.jpg" height={200} width={180}/>
              <p className="about-the-author">Margaret Wise Brown was an American writer of children's books, including Goodnight Moon and The Runaway Bunny, both illustrated by Clement Hurd. She has been called "the laureate of the nursery" for her achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
