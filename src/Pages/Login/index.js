import React, {useState} from 'react';

import './styles.css';

import Logo from '../../assets/logo.png';
import {FaLock, FaUser} from 'react-icons/fa';



export const Login = () =>{

const [user, setUser] = useState('');
const [pass, setPass] = useState('');

const handleLogin = () =>{
  
}


return(

<div className="main">
  <div className="container">
    
    <div className="middle">
      <div id="login">

        <form >

          <span className="fa fa-user"><FaUser/></span>
          <input type="text"  Placeholder="Username" required onChange={(e)=>setUser(e.target.value)}/>         
             
          <span className="fa fa-lock"><FaLock/></span>
          <input type="password"  Placeholder="Password" required onChange={(e)=>setPass(e.target.value)} />

         <button onClick={handleLogin}>Entrar</button>
            
         </form>

      </div>

      <div className="logo">        
        <img src={Logo} alt="Logo Verzel"/>
      </div>

    </div>
    
  </div>

</div>

)
}