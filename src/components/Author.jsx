import React from "react";
import { Link } from "react-router-dom"; // Import Link
import "../styles/card-slider.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const authors = [
  { id: 1, name: "Ana Huang", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7VarUjDMRQIz2RHJMzhI5-H1RpqW3vTrOA&s" },
  { id: 2, name: "Stephenie Meyer", img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-492372624.jpg" },
  { id: 3, name: "Colleen Hoover", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ08Pa3Q6BAhltm-faimAJdmKIQvKv9RB6lQ&s" },
  { id: 4, name: "Peter Brown", img: "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/Peter_Brown.jpeg" },
  { id: 5, name: "J. K. Rowling", img: "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg" },
  { id: 6, name: "Sadhguru", img: "https://vinaire.me/wp-content/uploads/2020/10/sadhguru2-1280x720-1.jpg" },
  { id: 7, name: "Robin Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGepAzkerXwCVBqtGZlon60Ym1fFxgA0kJQ&s" },
  { id: 8, name: "Vex King", img: "https://happiful.com/_next/image?url=https%3A%2F%2Fhappiful-magazine.ghost.io%2Fcontent%2Fimages%2F2023%2F04%2FBW_Vex-King-by-Alecsandra-Dragoi-USE-THIS-ONE.jpg&w=1920&q=75" },
  { id: 9, name: "Jay Shetty", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jay_Shetty_Headshot_2021.jpg/1200px-Jay_Shetty_Headshot_2021.jpg" },
];

const Authors = () => {
  return (
    <div className="authors-container">
      <p className="popular-author">Most Popular Authors</p>
      <div className="slide-container swiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <Swiper
              navigation={true}
              pagination={{ clickable: true, dynamicBullets: true }} 
              modules={[Navigation, Pagination]}
              spaceBetween={35}
              slidesPerView={5}
              loop={true}
              grabCursor={true}
              centeredSlides={true}
              className="swiper"
              breakpoints={{
                0: { slidesPerView: 1 },
                520: { slidesPerView: 2 },
                950: { slidesPerView: 3 },
                1200: { slidesPerView: 5 },
              }}
            >
              {authors.map((author) => (
                <SwiperSlide key={author.id} className="card swiper-slide">
                  <Link to={`/author/${author.id}`} className="author-link"> 
                    <div className="image-content">
                      <span className="overlay"></span>
                      <div className="card-image">
                        <img src={author.img} alt={author.name} className="card-img" />
                      </div>
                    </div>
                    <div className="card-content">
                      <h2 className="name">{author.name}</h2>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authors;
