import './App.css';
import Header from './Components/Header';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';
import AddUser from './Components/AddUser';
import Sidebar from './Components/Sidebar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === null ? false : Boolean(localStorage.getItem('isLoggedIn')))
  
  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  }
 
  return (
    <Router>
      <Header toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='signin'  element={<Signin toggleLogin={toggleLogin} />}></Route>
        <Route path='/add' element={<><Sidebar/><AddUser/></>}></Route>
        <Route path='/users' element={<><Sidebar/><AddUser/></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
