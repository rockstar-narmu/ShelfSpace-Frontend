import React, { useState } from "react";
import "../styles/bookTypes.css"; // Ensure you have your CSS file

const BookTypes = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelection = (type, available) => {
    if (available === "Not Available") return; // Prevent selection if unavailable
    setSelectedType(type);
  };

  return (
    <div className="book-type-container">
      <h3>Choose the Book type:</h3>
      <div className="book-types">
        {[
          { type: "paperback", label: "Paperback", price: "Rs.299.00", available: "In stock", icon: "/assets/icons/book-types/open-book.png" },
          { type: "hardcover", label: "Hardcover", price: "Rs.580.00", available: "In stock", icon: "/assets/icons/book-types/book (3).png" },
          { type: "ebook", label: "E-Book", price: "Rs.190.00", available: "Available", icon: "/assets/icons/book-types/ebook (1).png" },
          { type: "audiobook", label: "Audiobook", price: "Rs.100.00", available: "Not Available", icon: "/assets/icons/book-types/audiobook (1).png" },
        ].map((book, index) => (
          <div
            key={index}
            className={`book-type ${book.type} ${selectedType === book.type ? "selected" : ""} ${book.available === "Not Available" ? "disabled" : ""}`}
            onClick={() => handleSelection(book.type, book.available)}
          >
            <img src={book.icon} height={80} width={80} alt={book.label} />
            <div>
              <p className="type-of-book">{book.label}</p>
              <p className={`isAvailable ${book.available === "Not Available" ? "not-available" : ""}`}>{book.available}</p>
              <p className="book-type-price">{book.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTypes;
