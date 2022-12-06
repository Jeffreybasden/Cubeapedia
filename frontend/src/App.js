import {BrowserRouter as Route} from 'react-router-dom'
import Home from "./components/home"
import Navigation from './components/navigation';
import Login from "./components/loginPage"
import {useState} from "react"
function App() {
  return (
    <div>
    <head>
  <meta charSet="UTF-8"/>
  <title> </title>
  <link href="../css/site.css" type="text/css" rel="stylesheet"/>
  <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.png' />
</head>
  <Navigation/>
  <Route path='/' exact component={Home} />
  <Route path='/login' exact component={Login} />
  </div>
  );
}

export default App;
