import axios from "./axio"
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Row.css'

import { useStateValue } from "./StateProvider"
import { actionTypes } from "./reducer"
import Movies from "./Movies"
const base_url= "https://image.tmdb.org/t/p/original/"


// const base_url= "https://image.tmdb.org/t/p/original/"
function Row({title , fetchUrl}) {

    
    // const [state , dispatch] = useStateValue()
    // const [{movie} ] = useStateValue()
    const navigate = useNavigate()
    const [ movie , setMovie] = useState([])

    useEffect(()=>{
      async function fetchMovies(url) {
        const request =  await axios.get(url)
        const response = request.data.results
        // dispatch({
        //   type:actionTypes.SET_MOVIE,
        //   movie: response
        // })
        setMovie(response)

      }

      fetchMovies(fetchUrl)
    }, [fetchUrl])

    console.log("movie state" , movie)

  return (
    <div className='row'>
      <h1 className="title">{title}</h1>
        <div className='row__posters'>
          {/* <div className='row__movies'> */}
          {movie.map((m)=>(
          <Link to={`/movies/${m.title || m.name}`} state={{movies:m}}
          >
          <img
            key={m.id}
            className="row__posterLarge" 
            src={`${base_url}${m.poster_path}`} 
            alt={m.title}
            />
            {/*onClick={()=> navigate(`/movies/${m.title || m.name}`)} */}
            </Link>
          ))}
          {/* </div>       */}
        </div>
          
    </div>
  )
}

export default Row


