import React, {useContext} from 'react';
import UserContext from '../contexts/UserContexts'

const Movie = ({movie}) => {
  const{user, toggleFavoriteMovieToUser} = useContext(UserContext)

  const imgStyles ={
    height : '260px',
    objectFit : 'cover'
  }

  const isFavorite = user?.favoriteMovies?.includes(movie.id)

  return (
    <div className='card'>
        <img 
        src = {movie.imageUrl} 
        alt = {movie.title}
        className = 'card-img-top' 
        style = {imgStyles}
        />
        <div className='card-body'>

          <h4>{movie.title}</h4>
          {user?.id && 

          <button className={
            `btn ${isFavorite ? 'btn-success':'btn btn-outline-primary'}`}

              
            onClick= {() => toggleFavoriteMovieToUser(movie.id)}>
            favorite
          </button>
        }
        </div>


   
    </div>    
  )
  
}

export default Movie