import React, { Fragment } from 'react';
import Search from '../Search';
import Animes from '../Animes';
import GenreButtons from '../GenreButtons';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Animes />
      <GenreButtons />
    </Fragment>
  );
};

export default Home;
