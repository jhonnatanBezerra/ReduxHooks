import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

import './styles.css';

import Logo from '../../assets/logo.png';
import {FaLock, FaUser} from 'react-icons/fa';



export const NewLogin = () =>{

  const [user, setUser]= useState('');
  const [pass, setPass]= useState('');

  const history = useHistory();

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log(user, pass);
    history.push('/home');
    
  }


return(

<>
  <div className="container-login-2">
    
      <div className="content-2">
        

        <form className="login-2">
              
          <span ><FaUser/></span>
          <input type="text"  Placeholder="Username" required onChange={(e)=>setUser(e.target.value)} />  

          <span ><FaLock/></span>
          <input type="password"  Placeholder="Password" required onChange={(e)=>setPass(e.target.value)} />

          <button onClick={handleLogin}>Entrar</button>
            
        </form>

        <div className="logo-2">        
          <img src={Logo} alt="Logo Verzel"/>
          <h3>Texto</h3>
        </div>
        

      </div>
    
  </div>

</>

)
}