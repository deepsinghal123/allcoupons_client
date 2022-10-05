import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Coupon from './Coupon';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';

function ShowCoupons() {
    const [Coupons, setCoupons] = useState([]);
    const [search, setsearch] = useState("");
    const Wrapper = styled.div`
    margin:7px;
    `;
    const [isLoading, setisLoading] = useState(true);
    const [CouponWidth, setCouponWidth] = useState("330px");
    const [CouponMargin, setCouponMargin] = useState("71%");

    const fetch = async() =>{
        await axios.get('https://api.cashcrow.in/api_coupon').then(data=>{
        const dataFilter  = data.data.data.filter(item=>{
            if(search===""){
                return item;
            }
            else if(item.offer.toLowerCase().includes(search.toLowerCase())){
                return item;
                }
            })    
            setCoupons(dataFilter);
        });
        setisLoading(false);
    }

    const handleResize = () => {
        setCouponWidth(window.innerWidth > 768 ? "330px":"20rem");
        setCouponMargin(window.innerWidth > 768 ? "71%":"3%")
      }

    useEffect(() => {
        fetch();
        handleResize();
        window.addEventListener("resize", handleResize)
    }, [search])

    const handler = (e)=>{
        setisLoading(true);
        setsearch(e.target.value);
    }
    
  return (
      <Container>
        <TextField id="outlined-basic" label="Search" variant="outlined" type='text' onChange={handler} style={{marginLeft: CouponMargin,marginTop:"11px",width:CouponWidth}} />
        <Row>
   {     isLoading ? 
        <div style={{display: 'flex', justifyContent: 'center', marginTop:'70px'}}>
            <CircularProgress size={'70px'}/> </div>
            :
        Coupons.map((item,index)=>{
            return(<Col><Wrapper>
                <Coupon data={item} key={index}/>
                </Wrapper></Col>
            )
        })
    }
        </Row>
    </Container>
  )
}

export default ShowCoupons