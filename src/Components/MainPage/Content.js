import React from 'react'
import Crouselcmp from './Crouselcmp'
import styled from 'styled-components';
import ShowOffers from '../Offers/ShowOffers';

const Wrapper = styled.div`
width:100%;
height:10px;
background-color:#e6e1f5;
`
function Content() {
  return (
    <><Crouselcmp />
    <Wrapper />
    <ShowOffers />
    </>
  )
}

export default Content