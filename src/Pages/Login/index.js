import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'

import './styles.css';

import Logo from '../../assets/logo.png';
import {FaLock, FaUser} from 'react-icons/fa';



export const Login = () =>{

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
  <div className="container-login">
    
      <div className="content">
        

        <form className="login">
              
          <span ><FaUser/></span>
          <input type="text"  Placeholder="Username" required onChange={(e)=>setUser(e.target.value)} />  

          <span ><FaLock/></span>
          <input type="password"  Placeholder="Password" required onChange={(e)=>setPass(e.target.value)} />

          <button onClick={handleLogin}>Entrar</button>
            
        </form>

        <div className="logo">        
          <img src={Logo} alt="Logo Verzel"/>
          <h3>Texto</h3>
        </div>

      </div>
    
  </div>

</>

)
}