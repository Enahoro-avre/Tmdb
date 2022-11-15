import React from 'react'
import './Nav.css'
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

function Nav() {
  return (
    <div className='nav'>
        <div className='nav__container'>
        <div className='nav__title'>
          {/* <h1>Movie DB</h1> */}
           <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='imdb'/>

          <h3>Movies</h3>
          <h3>Tv shows</h3>
          <h3>Series</h3>
        </div>


        <div className='nav__icons'>
          <AddIcon/>
          <NotificationsNoneIcon/>
          <SearchIcon/>
        </div>
        </div>
    </div>
  )
}

export default Nav