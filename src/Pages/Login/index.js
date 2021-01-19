import React from 'react';
import './styles.css';

import Logo from '../../assets/logo.png';
import {FaLock, FaUser} from 'react-icons/fa';



export const Login = () =>{

  


return(

<div className="main">
  <div className="container">
    <center>
      <div className="middle">
        <div id="login">

          <form >
              
                <span className="fa fa-user"><FaUser/></span>
                <input type="text"  Placeholder="Username" required/>           

                <span className="fa fa-lock"><FaLock/></span>
                <input type="password"  Placeholder="Password" required/>

            <button>Entrar</button>

            
          </form>

        </div> 
        <div className="logo">        
            <img src={Logo} alt="Logo Verzel"/>
        </div>

      </div>
    </center>
  </div>

</div>

)
}