// import logo from './logo.svg';
import './App.css';
import { Choose } from './components/Choose';
import { Signin } from './components/Signin';
import { useState } from 'react';


function App() {
  const [selectFav, setSelectFav] = useState({
    bitterness: 3,
    acidity: 3,
    sweets: 3,
    richbody: 3,
    flavor: 3
  });

  const scoreBeans = (select) => {
    let score = 0;


  }



  return (
    <>
      <h1>Choose your favorite coffee</h1>
      <Choose />
      <Signin />
    </>
  );
}

export default App;
