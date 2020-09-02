import React, { useReducer } from 'react';
import axios from 'axios';
import { SEARCH_ANIMES, CLEAR_ANIMES, SELECT_GENRE } from '../types';
import AnimeReducer from './animeReducer';
import AnimeContext from './animeContext';

const AnimeState = (props) => {
  const initialState = {
    animes: [],
  };

  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  // Search Animes
  const searchAnimes = async (text) => {
    const res = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${text}&page=1`
    );

    dispatch({
      type: SEARCH_ANIMES,
      payload: res.data.results,
    });
  };

  // Genre Button Functionality
  const selectGenre = async (genre_id) => {
    const res = await axios.get(
      `https://api.jikan.moe/v3/genre/anime/${genre_id}/1`
    );

    dispatch({
      type: SELECT_GENRE,
      payload: res.data.anime,
    });
  };

  // Clear Animes
  const clearAnimes = () => {
    dispatch({
      type: CLEAR_ANIMES,
    });
  };

  return (
    <AnimeContext.Provider
      value={{ animes: state.animes, searchAnimes, clearAnimes, selectGenre }}
    >
      {props.children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
