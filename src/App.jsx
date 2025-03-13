import HomePage from './pages/homePage';
import { useState , useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  } ,[])
  
  return (
  <HomePage/>
  );
}

export default App;
