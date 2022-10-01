import React, {useContext} from 'react'
import UserContext from '../contexts/UserContexts'

const Navbar = () => {
  console.log(Navbar) 
  const {user, login, logout} = useContext(UserContext);


    return (
      
      <nav className='navbar navbar-dark bg-dark mb-4'>


        <div className='container'>

        <span className='navbar-brand'>
          <h2>{user ? `hola ${user.name}`:'Bienbenid@'}</h2>
        </span>

        {user ?  
         <button className='btn btn-primary' onClick={logout}>
                cerrar cesion
         </button>:
         <button className='btn btn-primary' onClick={login}>
                iniciar cesion
         </button>
        }



      

        
        </div>

      </nav>



        )
}

    
export default Navbar