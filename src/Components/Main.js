import React from 'react'
import Content from './MainPage/Content'
import Footer from './MainPage/Footer'
import Header from './MainPage/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Loginandregister/Login';
import Register from './Loginandregister/Register';

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/home' component={Content} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route component={Content} />
      </Switch>
      <Footer />
   
    </>
  )
}

export default Main