import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__container'>
            <div className='banner__title'>
                <h1>Welcome.</h1> 
            </div>

            <div className='banner__description'>
                <h1>Millions of movies , Tv shows and people to discover...Expore now</h1>
            </div>

            <div className='banner__input'>
              <input placeholder='Search for movie, Tvshow , person.... '/>
              <button className='button'>Search</button>
            </div>

        </div>
    </div>
  )
}

export default Banner