import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "./components/home"
import Navigation from './components/navigation';
import Login from "./components/loginPage"
import Footer from './components/footer';
import About from './components/about';
import NotFound from './components/404';
import Register from './components/Register';
import AddCube from './components/addCube';
import AddAcc from './components/AddAcc'
import Details from "./components/Details"
import {useState} from "react"
function App() {

  const [LoggedIn, setLoggedIn] = useState()


  return (
    <>
  <div className='container'>
  <Navigation LoggedIn={LoggedIn}/>
 <main>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login LoggedIn={LoggedIn} setLoggedIn={setLoggedIn}/>}  />
  <Route path='/about' element={<About/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/create' element={<AddCube/>}/>
  <Route path='/create/accessory' element={<AddAcc/>}/>
  <Route path='/details/:id' element={<Details/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 </main>
  </div>
  <Footer/>
    </>
  );
  
}

export default App;
