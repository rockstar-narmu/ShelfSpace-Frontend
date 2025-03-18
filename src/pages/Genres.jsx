import React from 'react'
import "../styles/genres.css";

export const Genres = () => {
  return (
    <div className='genres-main-container'>
      <p className='genre-title'>Shop By Genre</p>

      <div className='genre-grid-container'>
        <div className='genre-container'>
          <img src="/assets/vectors/genres/romance.png" height={150} width={170} alt='romance'/>
          <p>Romance</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/comic.png" height={150} width={170} alt='comic'/>
          <p>Comics</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/fantasy.png" height={150} width={170} alt='fantasy'/>
          <p>Fantasy</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/mystery.png" height={150} width={170} alt='mystery'/>
          <p>Mystery & Thriller</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/science-fiction.png" height={150} width={170} alt='scifi'/>
          <p>Science Fiction</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/poetry.png" height={150} width={170} alt='poetry'/>
          <p>Literature</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/manga.png" height={150} width={170} alt='manga'/>
          <p>Manga</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/self-help.png" height={150} width={170} alt='self-help'/>
          <p>Self-Help</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/biography.png" height={150} width={170} alt='bio'/>
          <p>Biographies</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/true-crime.png" height={150} width={170} alt='thriller'/>
          <p>Crime</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/history.png" height={150} width={170} alt='history'/>
          <p>Historical Fiction</p>
        </div>

        <div className='genre-container'>
          <img src="/assets/vectors/genres/business.png" height={150} width={170} alt='business'/>
          <p>Business</p>
        </div>

      </div>
    </div>
  )
}
