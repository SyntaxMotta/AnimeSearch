import { SEARCH_ANIMES, CLEAR_ANIMES, SELECT_GENRE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
      };
    case SELECT_GENRE:
      return {
        ...state,
        animes: action.payload,
      };
    case CLEAR_ANIMES:
      return {
        ...state,
        animes: [],
      };
    default:
      return state;
  }
};
