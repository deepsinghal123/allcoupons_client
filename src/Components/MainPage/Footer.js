import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
position: fixed;
bottom: 0;
text-allign:center;
height:50px;
background-color:#e6e1f5;
colorLblack;
padding:12px;
`

function Footer() {
  return (
    <Wrapper>CahCrow &#169;2022</Wrapper>
  )
}

export default Footer