import React, { useContext } from 'react';
import AnimeContext from '../context/animes/animeContext';

export const GenreButton = ({ genre_id, genre }) => {
  const animeContext = useContext(AnimeContext);

  return (
    <button
      onClick={() => animeContext.selectGenre(genre_id)}
      className="genre-btn"
    >
      {genre}
    </button>
  );
};

export default GenreButton;
