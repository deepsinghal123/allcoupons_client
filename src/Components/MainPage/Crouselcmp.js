import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Wrapper = styled.img`
width:100%;
height:500px;
`
function Crouselcmp() {
  return (
    <Carousel>
      <Carousel.Item>
        <Wrapper
          className="d-block w-100"
          src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/11009-ApolloPharmacy_600x300_Banner.jpg"
          alt="First slide"
            onClick={()=>{window.open('https://www.apollopharmacy.in/','_black')}}
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <Wrapper
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8bOG8Sf3ojh_Yw4oqkz8UqBl3-ayI3_eEw&usqp=CAU"
          alt="First slide"
            onClick={()=>{window.open('https://www.boddess.com/','_black')}}
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <Wrapper
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn90ngt0iJeMuaupMJVK3r3nK5dnlolhlSA&usqp=CAU"
          alt="First slide"
            onClick={()=>{window.open('https://mamaearth.in','_black')}}
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Crouselcmp