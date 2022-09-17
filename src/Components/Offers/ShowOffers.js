import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Offer from './Offer';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { getUserData } from '../../ConfigFiles/isLogin';

function ShowOffers() {
    const [offers, setoffers] = useState([]);
    const [search, setsearch] = useState("");
    const Wrapper = styled.div`
    margin:7px;
    `;
    const [isLoading, setisLoading] = useState(true);

    const fetch = async() =>{
        await axios.get('https://api.cashcrow.in/api').then(data=>{
        const dataFilter  = data.data.stores.filter(item=>{
            if(search===""){
                return item;
            }
            else if(item.merchant.toLowerCase().includes(search.toLowerCase())){
                return item;
                }
            })    
            setoffers(dataFilter);
        });
        setisLoading(false);
    }

    useEffect(() => {
        fetch();
        console.log(getUserData());
    }, [search])

    const handler = (e)=>{
        setsearch(e.target.value);
    }
    
  return (
    isLoading ? 
    <div style={{display: 'flex', justifyContent: 'center', marginTop:'70px'}}>
        <CircularProgress size={'70px'}/> </div>
   
        :
    <Container>

        <TextField id="outlined-basic" label="Search" variant="outlined" type='text' onChange={handler} style={{marginLeft: '71%',marginTop:"50px",width:"330px"}} />
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