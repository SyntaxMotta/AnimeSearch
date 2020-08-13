import React, { useContext } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Animes from './components/Animes';
import AnimeState from './context/animes/AnimeState';
import Search from './components/Search';
import AnimeContext from './context/animes/animeContext';
import GenreButtons from './components/GenreButtons';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  const animeContext = useContext(AnimeContext);
  return (
    <AnimeState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </AnimeState>
  );
}

export default App;
