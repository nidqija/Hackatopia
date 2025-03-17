import HomePage from './pages/homePage';
import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import InitiativePage from './pages/initiativesPage';

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
 <Router>
    <Routes>
       <Route path='/' element={<HomePage />}/>
       <Route path='/initiatives' element={<InitiativePage/>} />
    </Routes>
  </Router>
  );
}

export default App;
