// import logo from './logo.svg';
import './App.css';
import { Choose } from './components/Choose';
import { Signin } from './components/Signin';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext';
import Tour from 'reactour'


function App() {
  const url = "https://solomvp-api.onrender.com";
  // const url = "http://localhost:8080";


  const steps = [
    {
      selector: "#heading",
      content: "このアプリはあなた好みのコーヒー豆をおすすめします",
    },
    {
      selector: "#bitterness",
      content: "苦味は好きですか？好きな場合は右側へスライドしてください。",
    },
    {
      selector: "#rangeList",
      content: "酸味・甘味・コク・香りについても好みを選択したください。",
    },
    {
      selector: "#search",
      content: "あなたにぴったりのコーヒー豆を紹介します！",
    },

  ];
  const [isTourOpen, setIsTourOpen] = useState(true);

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
          <h1 id="heading">Choose your favorite coffee</h1>
        </header>
        {signin ? <Signin setSignin={setSignin} url={url} /> :
          <>
            <Choose selectFav={selectFav} setSignin={setSignin} setSelectFav={setSelectFav} recommendBeans={recommendBeans} />
          </>
        }
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
        />
      </AuthProvider>
    </>


  );
}

export default App;
