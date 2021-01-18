import { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from './Actions';

function App() {

  //https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf

  //https://www.youtube.com/watch?v=LGkNjt7k4UQ&t=1s&ab_channel=Rocketseat

 const valor = useSelector(state => state.clickState.newValue); //BUSCANDO NO STATE A CHAVE  clickState E O VALOR newValue
 const dispatch = useDispatch();

 const [value, setValue] = useState('');

 const handleClick = () => {
   dispatch(actions.clickButton(value));
   setValue('');
  }


  return (
    <>
    <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button onClick={handleClick}>
          Click me!
        </button>
        <h1>teste :  {valor} </h1>
      </div>
    </>
  );
}

export default App;
