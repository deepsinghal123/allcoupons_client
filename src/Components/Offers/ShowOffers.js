import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Offer from './Offer';

function ShowOffers() {
    const [offers, setoffers] = useState([])
    const [search, setsearch] = useState("")
    const Wrapper = styled.div`
    padding:12px;
    margin:12px;
    `

    useEffect(() => {
        axios.get('/api').then(data=>{
        const dataFilter  = data.data.stores.filter(item=>{
            if(search===""){
                return item;
            }
            else if(item.merchant.toLowerCase().includes(search.toLowerCase())){
                return item;
                }
            })    
            setoffers(dataFilter);
        })
    }, [search])

    const handler = (e)=>{
        console.log(e.target.value)
        setsearch(e.target.value);
    }
    
  return (
    <Container>
        <input type='text' onChange={handler} style={{marginTop:"20px",marginLeft:"-5%",width:"20%"}} />
        <Row>

    {
        offers.map((item,index)=>{
            return(<Col><Wrapper>
                <Offer data={item} key={index}/>
                </Wrapper></Col>
            )
        })
    }
        </Row>
    </Container>
  )
}

export default ShowOffers