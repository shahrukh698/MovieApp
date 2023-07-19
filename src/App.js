import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import './App.scss';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <div className='container'>
      <Routes>
      <Route path='/' exact Component={Home}/>
      <Route path="/movie/:imdbID" Component={MovieDetail}/>
      <Route path='*' Component={PageNotFound}/>
      </Routes>
      </div>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
