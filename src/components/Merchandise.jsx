import React from "react";
import { Link } from "react-router-dom";
import "../styles/merchandise.css";

export const Merchandise = () => {
  return (
    <div className="merch-container">
      <div className="merch-title">
        <p className='only-books'>Only Books?</p>
        <p className='some-merch'>Why not some Merch?</p>
      </div>

      <div className='merch-icon-container'>
        <div>
          <Link to="/sticky-notes"> 
            <img src="assets/icons/merch/sticky-notes.png" height={100} width={100} />
          </Link>
          <p>Sticky Notes</p>
        </div>
        <div>
          <img src="assets/icons/merch/bookmark.png" height={100} width={100}/>
          <p>Bookmarks</p>
        </div>
        <div>
          <Link to="/highlighter"> 
            <img src="assets/icons/merch/notepad.png" height={100} width={100}/>
          </Link>
          <p>Highlighter</p>
        </div>
        <div>
          <Link to="/book-holder"> 
            <img src="assets/icons/merch/book (3).png" height={100} width={100}/>
          </Link>   
          <p>Book Holder</p>       
        </div>
        <div>
          <Link to="/lamp"> 
            <img src="assets/icons/merch/reading.png" height={100} width={100}/>
          </Link>
          <p>Clip on Lamps</p>
        </div>
        <div>
          <img src="assets/icons/merch/bookshelf.png" height={100} width={100}/>
          <p>Book Shelves</p>
        </div>
      </div>
    </div>
  )
}
