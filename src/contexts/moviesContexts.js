import React, {createContext} from 'react';
import initialMovies from '../consts/initialMovies.js'
const MovieContexts = createContext();


const MovieProvider = ({children}) =>{
    const data = {movies : initialMovies};



    return(
        
        <MovieContexts.Provider value={data}>
            {children}
        </MovieContexts.Provider>

    )

}


export  { MovieProvider};

export default MovieContexts;