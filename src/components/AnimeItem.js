import React from 'react';

const AnimeItem = ({ anime }) => {
  return (
    <div className="card">
      <a href={anime.url}>
        <h2 className="card-title">{anime.title}</h2>

        <img
          src={anime.image_url}
          alt="Anime poster image"
          className="card-img"
        />
      </a>
      <div className="card-details">
        <p>
          <strong>Score:</strong> {anime.score}
        </p>
        {anime.type === 'TV' && (
          <p>
            <strong>Episodes: </strong> {anime.episodes}
          </p>
        )}

        {!anime.start_date ? (
          <p></p>
        ) : (
          <p>
            <strong>Start Date: </strong>
            {anime.start_date}
          </p>
        )}

        {!anime.end_date ? (
          <p></p>
        ) : (
          <p>
            <strong>End Date: </strong>
            {anime.end_date}
          </p>
        )}
        <p>
          {anime.type === 'Movie' ? (
            <strong>Movie</strong>
          ) : (
            <strong>TV Show</strong>
          )}
        </p>

        {!anime.rated ? (
          <p></p>
        ) : (
          <p>
            <strong>Rated: </strong>
            {anime.rated}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimeItem;
