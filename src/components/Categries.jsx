import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/category-icons.css";

const categories = [
  { src: "assets/icons/medal.png", name: "Best Seller", path: "/bestsellers" },
  { src: "assets/icons/achievement.png", name: "Award Winners", path: "/award-winners" },
  { src: "assets/icons/box.png", name: "Box Sets", path: "/box-sets" },
  { src: "assets/icons/world-book-day.png", name: "International Best Sellers", path: "/international-best-sellers" },
  { src: "assets/icons/new.png", name: "New Releases", path: "/new-releases" },
  { src: "assets/icons/romance.png", name: "Romance Books", path: "/romance-books" },
  { src: "assets/icons/children.png", name: "Children Books", path: "/children-books" },
  { src: "assets/icons/fantasy.png", name: "Fictional Books", path: "/fiction-books" },
  { src: "assets/icons/bookmark.png", name: "Bookmarks", path: "/bookmarks" },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="category-icons">
      <div className="images">
        {categories.map((category, index) => (
          <img
            key={index}
            src={category.src}
            alt={category.name}
            height="50"
            width="50"
            onClick={() => category.path && navigate(category.path)}
            style={{ cursor: category.path ? "pointer" : "default" }}
          />
        ))}
      </div>

      <div className="captions">
        {categories.map((category, index) => (
          <div key={index} className="name">{category.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
