import React, { useContext } from 'react';
import AnimeItem from './AnimeItem';
import AnimeContext from '../context/animes/animeContext';

export const Animes = () => {
  const animeContext = useContext(AnimeContext);

  const { animes } = animeContext;

  return (
    <div className="grid-3">
      {animes.map((anime) => (
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default Animes;
