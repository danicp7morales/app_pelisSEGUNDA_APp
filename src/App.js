import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { UserProvider } from './contexts/UserContexts';
import {MovieProvider} from './contexts/moviesContexts'



function App() {
  return (
    <div>

       <UserProvider>
      
         <MovieProvider>
           <Navbar />
           <MovieList />
           

         </MovieProvider>
         
       </UserProvider>

      

    </div>
       
  );
}

export default App;
