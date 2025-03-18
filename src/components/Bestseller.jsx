import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bestseller.css";

const Bestseller = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bestsellers">
      <div>
        <img
          src="assets/vectors/book_stack-removebg-preview.png"
          alt="book stack"
          height="400"
          width="400"
        />
      </div>

      <div className="popular">
        <p className="popular-title">
          50 most popular<br /> Bestsellers of 2025
        </p>
        <p>
          List of the most interesting books<br />
          of the year based on customers<br />
          and critics reviews
        </p>
        <div className="view-box">
          <img src="assets/icons/eye.png" alt="eye" height="40" width="40" />
          <button className="view">view all</button>
        </div>
      </div>

      <div className="divisions">
        {/* ✅ Kids Section - Clickable */}
        <div className="division" onClick={() => handleNavigation("/kids")}>
          <img src="assets/icons/toys.png" height="80" width="80" alt="toys" />
          <div className="division-content">
            <p className="content-title">Top 50 books for kids</p>
            <p>Picture books, books series<br /> and chapter books</p>
          </div>
        </div>

        {/* ✅ Classic Books Section - Clickable */}
        <div className="division" onClick={() => handleNavigation("/classics")}>
          <img src="assets/icons/scroll.png" height="80" width="80" alt="literature" />
          <div className="division-content">
            <p className="content-title">Top 50 classic books</p>
            <p>Discover the most influential<br /> books in classic literature</p>
          </div>
        </div>

        {/* ✅ Sci-Fi Books Section - Clickable */}
        <div className="division" onClick={() => handleNavigation("/scifi")}>
          <img src="assets/icons/ufo.png" height="80" width="80" alt="ufo" />
          <div className="division-content">
            <p className="content-title">Top 50 Sci-Fi books</p>
            <p>Discover the best sci-fi books<br /> about time and space travel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
