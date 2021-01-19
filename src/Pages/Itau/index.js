import React from 'react';
import './styles.css';



export const Itau = () =>{


return(

<div className="main">
  <div className="container">
    <center>
      <div className="middle">
        <div id="login">

          <form >

            <fieldset className="clearfix">

              <p >
                <span className="fa fa-user"></span>
                <input type="text"  Placeholder="Username" required/>
              </p> 

              <p>
                <span className="fa fa-lock"></span>
                <input type="password"  Placeholder="Password" required/>
              </p> 
      
             <div>
                <span >
                  <a className="small-text" href="#">Forgort password?</a>
                </span>

                <span >
                  <input type="submit" value="Sign In"/>
                </span>
              </div>

            </fieldset>

            <div className="clearfix"></div>
          </form>

           <div class="clearfix"></div>

        </div> 
        <div className="logo">LOGO            
            <div className="clearfix"></div>
        </div>

      </div>
    </center>
  </div>

</div>

)
}