import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "./components/home"
import Navigation from './components/navigation';
import Login from "./components/loginPage"
import Footer from './components/footer';
import About from './components/about';
import NotFound from './components/404';
function App() {
  return (
    <>
  <div className='container'>
  <Navigation/>
 <main>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>} />
  <Route path='/about' element={<About/>}/>
  <Route path='*' element={<NotFound/>}/>
 </Routes>
 </main>
  </div>
  <Footer/>
    </>
  );
  
}

export default App;
