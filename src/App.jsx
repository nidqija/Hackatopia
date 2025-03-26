import HomePage from './pages/homePage';
import { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import InitiativePage from './pages/initiativesPage';
import JoinUs from './pages/joinus';
import HeadQuaters from './pages/headQuaters';
import ContactUs from './pages/contactUs';
import { supabase } from './createClient';


function App() {


  const [users , setUsers] = useState([]);
  console.log(users)


useEffect(()=>{
   fetchUsers()
} , [])



async function fetchUsers(){
   const {data} = await supabase
   .from('users')
   .select("*")
   setUsers(data)

}




  return (
 <Router>
    <Routes>
       <Route path='/' element={<HomePage />}/>
       <Route path='/initiatives' element={<InitiativePage/>} />
       <Route path='/joinus' element={<JoinUs/>} />
       <Route path='/headquaters' element={<HeadQuaters/>}/>
       <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>
  </Router>
  );
}

export default App;
