import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container>
            
          <Navbar.Brand href="#home" className='mx-3'>UNVIOLENCE!</Navbar.Brand>
          <Nav className='justify-content-end '>
            <Nav.Link href="/"  className='mx-3 '>Home</Nav.Link>
            <Nav.Link href="/initiatives" className='mx-3'>Intiatives</Nav.Link>
            <Nav.Link href="/headquaters"  className='mx-3'>Our HQ</Nav.Link>
            <Nav.Link href="/joinus"  className='mx-3'>Join Us</Nav.Link>
            <Nav.Link href='#About_us' className='mx-3'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
   

    </>
  );
}

export default Navbar1;