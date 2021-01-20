import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import './App.css';
import './components/css/style.css';
import About from './components/About';
import Error from './components/Error';
import Menu from './components/Menu';
import Register from './components/Register';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
          <div className='menu_style'>
    {/* <NavLink exact activeClassName='active_class' to="/"> Home </NavLink>
    <NavLink  exact activeClassName='active_class' to="/menu"> Menu </NavLink>
    <NavLink   exact activeClassName='active_class' to="/contact"> Contact </NavLink>
    <NavLink  exact activeClassName='active_class' to="/about"> About </NavLink>  */}
  <a href="/"> Home </a>
  <a href="/register"> Register  </a>
  <a href="/menu"> Menu </a>
    <a href="/about"> About  </a>
<a href="/form"> Form  </a>
    </div>
      <BrowserRouter>
 <Switch>   
 <Route  path= '/'exact component= {Home} /> 
 <Route path= '/menu' component= {Menu} />
   <Route path= '/about' component= {About} />

   <Route path= '/register' component= {Register} />
   <Route path= '/form' component= {Form} />
   <Route component= {Error} />
 </Switch>
 </BrowserRouter>

  
    </div>
  );
}

export default App;
