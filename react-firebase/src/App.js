import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Add from './pages/Add';
import Articles from './pages/Articles';
import Favorites from './pages/Favorites';
import Movies from './pages/Movies';
import Recent from './pages/Recent';
import TV from './pages/TV';
import Home from './pages/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/Movies" component={Movies} />
        <Route exact path="/TV" component={TV} />
        <Route exact path="/recent" component={Recent} />
        <Route exact path="/books" component={BooksPage} />
      </Router>
    </div>
  );
}

export default App;
