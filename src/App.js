// import logo from './logo.svg';
import './App.css';
import { Choose } from './components/Choose';
import { Signin } from './components/Signin';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext';


function App() {
  const url = process.env.DATABASE_URL ? "https://solomvp-api.onrender.com" : "http://localhost:8080";
  // const url = "https://solomvp-api.onrender.com";
  const [selectFav, setSelectFav] = useState({
    bitterness: 3,
    acidity: 3,
    sweets: 3,
    richbody: 3,
    flavor: 3
  });
  const [recommendBeans, setRecommendBeans] = useState([]);

  const [signin, setSignin] = useState(false);


  useEffect(() => {
    axios.get(url + "/recommendbeans", selectFav)
      .then(res => setRecommendBeans(res.data));
    console.log("selectFav:", selectFav)
  }, [selectFav])

  useEffect(() => {
    console.log("recommendBeans:", recommendBeans)
  }, [recommendBeans])




  return (
    <>
      <AuthProvider>
        <header>
          <h1>Choose your favorite coffee</h1>
        </header>
        {signin ? <Signin setSignin={setSignin} url={url} /> :
          <>
            <Choose selectFav={selectFav} setSelectFav={setSelectFav} recommendBeans={recommendBeans} />
            <footer>
              <button className="sigininBtn" onClick={() => setSignin(true)}>Administration</button>
            </footer>
          </>
        }
      </AuthProvider>

    </>
  );
}

export default App;
