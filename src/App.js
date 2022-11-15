import Nav from './Nav';
import './App.css';
import Row from './Row';
import Banner from './Banner'
import requests from './request';
import { Router , Routes, Route , Link } from 'react-router-dom'
import Movies from './Movies';
import Home from './Home';

function App() {
  
  return (
    <div className="app">

      {/* <Nav/>
      <Banner/> */}
    {/* <h3><Link to="/">Home</Link></h3>
    <h3><Link to="/:id">Banner</Link></h3> */}
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/movies/:id" element={<Movies/>}  />
              
      </Routes>
      {/* <Row title="NETFLIX-ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/> */}
 
    {/* <h3><Link to="/movies">Movies</Link></h3> */}


    </div>
  );
}

export default App;

// 622da0cef50d295f320331f6e2ade386
// https://api.themoviedb.org/3/movie/550?api_key=622da0cef50d295f320331f6e2ade386