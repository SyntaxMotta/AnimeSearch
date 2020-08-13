import React, { useState, useContext, useEffect } from 'react';
import AnimeContext from '../context/animes/animeContext';
import GenreButtons from './GenreButtons';

export const Search = () => {
  const animeContext = useContext(AnimeContext);
  const [text, setText] = useState('');

  const { animes, searchAnimes, clearAnimes } = animeContext;

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      console.log('Please enter something');
    } else {
      searchAnimes(text);
      setText('');
    }
  };

  return (
    <div className="Search">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="enter an anime"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" value="search" className="search__btn" />
        {animes.length > 0 && (
          <button className="clear-btn" onClick={clearAnimes}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
