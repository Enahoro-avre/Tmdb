import React from 'react'
import { useParams } from 'react-router-dom'
import Movie_Details from './Movie_Details'
import Nav from './Nav'
import { useStateValue } from './StateProvider'
import { useLocation} from 'react-router-dom'

function Movies(props) {

  const {id} = useParams()
  // const [{ movie }] = useStateValue()
  // console.log("movie 1" , movie)
  const location = useLocation()
  const  { movies } = location.state
  // console.log("use laocation" , location)


  return (
    <div>
        <Nav/>
        {/* <h1>Movie : {id}</h1> */}

        {/* {movie.map(({id , title})=>(
          <Movie_Details title={title} id={id}/>
        ))} */}
        <Movie_Details movie={movies}/>
      
    </div>
  )
}

export default Movies