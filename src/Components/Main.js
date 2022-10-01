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
import ShowOffers from './Offers/ShowOffers';
import Crouselcmp from './MainPage/Crouselcmp';

function Main() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{display:"flex",paddingLeft:window.innerWidth <=500?"11%":"25%",paddingTop:"20px"}}>
          {
            window.innerWidth <=500?<iframe src='https://inrdeals.com/dynamic/ad-300x250?user=dee542885700' height='90px' width='100%' frameborder='0' allowTransparency='true' scrolling='no'></iframe>:
            <iframe src='https://inrdeals.com/dynamic/ad-728x90?user=dee542885700' height='90px' width='100%' frameborder='0' allowTransparency='true' scrolling='no'></iframe>
          }
        </div>
          <Crouselcmp />
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
            <Route exact path="/Offers">
              <ShowOffers />
            </Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default Main