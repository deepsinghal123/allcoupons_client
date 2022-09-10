import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const Login = () => {
  const Wrapper = styled.div`
        text-align: center;
        display: block;
    `;

  return (
    <Wrapper>
      <Form style={{
        width: '40%', display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left',
        marginTop: '110px',
        padding: '20px',
        border: '2px solid black'
      }}><h4>Login</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Wrapper>
  );
}

export default Login;