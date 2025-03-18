import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/author-details.css";

const authors = [
  { id: 1, name: "Ana Huang", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7VarUjDMRQIz2RHJMzhI5-H1RpqW3vTrOA&s", bio: "Ana Huang is a contemporary romance author known for her Twisted series." },
  { id: 2, name: "Stephenie Meyer", img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-492372624.jpg", bio: "Stephenie Meyer is best known for her Twilight saga." },
  { id: 3, name: "Colleen Hoover", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ08Pa3Q6BAhltm-faimAJdmKIQvKv9RB6lQ&s", bio: "Colleen Hoover writes bestselling contemporary romance and fiction novels." },
  { id: 4, name: "Peter Brown", img: "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/Peter_Brown.jpeg", bio: "Peter Brown is a children's book author and illustrator." },
  { id: 5, name: "J. K. Rowling", img: "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss.jpg", bio: "J.K. Rowling is the author of the Harry Potter series." },
  { id: 6, name: "Sadhguru", img: "https://vinaire.me/wp-content/uploads/2020/10/sadhguru2-1280x720-1.jpg", bio: "Sadhguru is a spiritual leader and author of several self-help books." },
  { id: 7, name: "Robin Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGepAzkerXwCVBqtGZlon60Ym1fFxgA0kJQ&s", bio: "Robin Sharma is a leadership and personal growth author." },
  { id: 8, name: "Vex King", img: "https://happiful.com/_next/image?url=https%3A%2F%2Fhappiful-magazine.ghost.io%2Fcontent%2Fimages%2F2023%2F04%2FBW_Vex-King-by-Alecsandra-Dragoi-USE-THIS-ONE.jpg&w=1920&q=75", bio: "Vex King writes about self-love and mindfulness." },
  { id: 9, name: "Jay Shetty", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jay_Shetty_Headshot_2021.jpg/1200px-Jay_Shetty_Headshot_2021.jpg", bio: "Jay Shetty is an author and former monk known for his motivational books." },
];

const AuthorDetails = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === parseInt(id));

  if (!author) return <p>Author not found!</p>;

  return (
    <Layout>
      <div className="author-details">
        <div className="image-and-follow">
          <img src={author.img} alt={author.name} height={280} width={250}/>
          <h2>{author.name}</h2>
          <p>Ana Huang is a Chinese-American author who primarily writes novels in the romance and new adult fiction genres. She is a #1 New York Times and USA Today bestselling author.</p>
          <div className="follow-button">+ Follow</div>
        </div>

        <div className="collections">
          <h1>Collections of {author.name}:</h1>
          <div className="collections-grid">
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/81M7-R693dL._UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>A Court of Thorns and Roses</p>
            </div>

            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/81zCK5-V09L._UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>A Court of Mist and Fury</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/81csincCSbL._UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>A Court of Wings and Ruin</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/817QDDwMqqL._UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>A Court of Frost and Starlight</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/91z7oO-Qt6L._UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>A Court of Silver Flames</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/71YJet75sxL.jpg" alt="book" height={330} width={230}/>
              <p>Twisted Love</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/71I+IS0Xx-L._AC_UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>Twisted Games</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/71u59k0c6DL.jpg" alt="book" height={330} width={230}/>
              <p>Twisted Hate</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/71jYp3aIf9L.jpg" alt="book" height={330} width={230}/>
              <p>Twisted Lies</p>
            </div>
            <div className="collections-book">
              <img src="https://m.media-amazon.com/images/I/61LkGj5Hs5L._AC_UF1000,1000_QL80_.jpg" alt="book" height={330} width={230}/>
              <p>King of Wrath</p>
            </div>
            <div className="collections-book">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdW8yLX-NcaEJ5erJjOJ7vmm-WR8v4DwX3Q&s" alt="book" height={330} width={230}/>
              <p>King of Pride</p>
            </div>
            <div className="collections-book">
              <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687764099i/124943221.jpg" alt="book" height={330} width={230}/>
              <p>King of Greed</p>
            </div>
            <div className="collections-book">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oo_BVhqU6vjoj-A-JE-aXhVN9B331mQYwg&s" alt="book" height={330} width={230}/>
              <p>King of Sloth</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorDetails;
