import React , { useState } from 'react'
import './Movie_Details.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { IconButton } from '@mui/material';


const base_url= "https://image.tmdb.org/t/p/original/"



function Movie_Details(props) {

    //  console.log("movie_details"  , movie)
  const [ movies , setMovies] = useState([])
  const [ trailerUrl , seTrailerUrl ] = useState("")
  const air = props.movie.first_air_date || props.movie.release_date
  const date = air.split('-')
  const release_date = date[0]
  

  const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        },
    }

    const handleClick = (movie)=> {
        if (trailerUrl) {
            seTrailerUrl('')
        } else {
            movieTrailer(movie?.name || "")
            .then((url)=> {
                // https://www.youtube.com/watch?v=Xtmshshss
                const urlParams = new URLSearchParams(new URL(url).search)
                seTrailerUrl(urlParams.get('v'))
            })
            .catch(error => console.log(error))
        }
    }

  const style = {
  backgroundImage: `url(${base_url}${props.movie.backdrop_path})`
  }
  return (
    <div className='movie__details' style={style}>
      {/* style={{backgroundImage: `url(${base_url}${props.movie.backdrop_path})` }} */}
      <div className='movie__container'>
        <div className='movie__image'>
          <img className='movie__image__img'  src={`${base_url}${props.movie.poster_path}`} alt={props.title || props.name}/>
        </div>

        <div className='movie__description'>
          <h1 className='movie__header'>{props.movie.name || props.movie.title} <span className='span'>({release_date})</span></h1>
        
          <h3>({props.movie.media_type})   
   {props.movie.release_date || props.movie.first_air_date}(US) Action , thriller , science fiction * 1h/30mins</h3>
          
          <div className='movie__icons'>
            <AddIcon/>
            <NotificationsNoneIcon/>
            
          <PlayCircleOutlineIcon onClick={()=>handleClick(props.movie)}/>
            
            
          </div>
        { trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}

          <div className='movie__overview'>
            <h2 className='overview'>Overview</h2>

            <h4 >{props.movie.overview}
          </h4>

          {/* <h3 className='overview__director'>Neil Marshall</h3>
          <p>Director , writer</p> */}
          </div>
        </div>

      </div>
  
      
      


      </div>
  )
}


{/* {movie.map(({overview})=>(
            <h1>{overview}</h1>
        ))} */}
export default Movie_Details