import React, { useState, useEffect, useRef } from "react";
import "../styles/image-slider.css";

const ImageSlider = () => {
  const images = [
    "https://prh.imgix.net/articles/top10-fiction-1600x800.jpg",
    "https://letterformarchive.org/wp-content/uploads/2024/11/2024Publications_3000px.jpg",
    "https://time.com/wp-content/uploads/2014/12/children.jpg",
    "https://prh.imgix.net/articles/top10-nonfiction-1600x800-1.jpg",
    "https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/20/2024/12/All-BB-2000x1000-BG.png",
  ];

  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const checkleft = sliderRef.current.children[active].offsetLeft;
      sliderRef.current.style.left = `-${checkleft}px`;
    }
  }, [active]);

  return (
    <div className="slider">
      <div className="list" ref={sliderRef}>
        {images.map((src, index) => (
          <div key={index} className="item">
            <img src={src} alt={`slide-${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <button id="prev" onClick={prevSlide}>&lt;</button>
        <button id="next" onClick={nextSlide}>&gt;</button>
      </div>

      {/* Dots Indicator */}
      <ul className="dots">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
