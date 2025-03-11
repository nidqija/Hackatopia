import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container>
            
          <Navbar.Brand href="#home" className='mx-3'>STOP!</Navbar.Brand>
          <Nav className='justify-content-end '>
            <Nav.Link href="#home"  className='mx-3 '>Home</Nav.Link>
            <Nav.Link href="#features" className='mx-3'>Features</Nav.Link>
            <Nav.Link href="#pricing"  className='mx-3'>Pricing</Nav.Link>
            <Nav.Link href='#About_us' className='mx-3'>About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
   

    </>
  );
}

export default Navbar1;