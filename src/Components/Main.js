import React from 'react'
import Content from './MainPage/Content'
import Footer from './MainPage/Footer'
import Header from './MainPage/Header'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from './Loginandregister/Login';
import Register from './Loginandregister/Register';

function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="mb-2 mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route exact path="/Home">
              <Content />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default Main