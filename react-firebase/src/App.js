import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={BooksPage} />
      </Router>
    </div>
  );
}

export default App;
