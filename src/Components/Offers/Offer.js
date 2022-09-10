import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Offer({data}) {
  const payout=(value)=>{
    if(value.split('%').length>1){

      return( Math.floor(parseInt(value.split('%')[0])*.7)+"%")
    }
    else{
      return( Math.floor(parseInt(value.split('₹')[1])*.7)+"₹")
    }
  }
  payout(data.payout)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.logo} style={{width:'100%',height:"200px"}}/>
      <Card.Body>
        <Card.Title>{data.merchant}</Card.Title>
        <Card.Text>
            <p>payout{" "}{payout(data.payout)}</p>
        </Card.Text>
        <a href={data.url} target='_blank'>Go to</a> 
      </Card.Body>
    </Card>
  );
}

export default Offer;