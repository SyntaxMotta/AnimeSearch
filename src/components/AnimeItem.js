import React from 'react';

const AnimeItem = ({ anime }) => {
  return (
    <div className="card">
      <h2 className="card-title">{anime.title}</h2>
      <img src={anime.image_url} alt="" className="card-img" />
      <div className="card-details">
        <p>
          <strong>Score:</strong> {anime.score}
        </p>
        {anime.type === 'TV' && (
          <p>
            <strong>Episodes:</strong> {anime.episodes}
          </p>
        )}
        <p>
          <strong>Start Date:</strong>
          {anime.start_date}
        </p>
        <p>
          <strong>End Date:</strong>
          {anime.end_date}
        </p>
        <p>
          {anime.type === 'Movie' ? (
            <strong>Movie</strong>
          ) : (
            <strong>TV Show</strong>
          )}
        </p>
      </div>
    </div>
  );
};

export default AnimeItem;
