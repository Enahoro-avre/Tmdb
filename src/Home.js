import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Row from './Row';
import requests from './request';

function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Row title="NETFLIX-ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>
        
        
    </div>
  )
}

export default Home