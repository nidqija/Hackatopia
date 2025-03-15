import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Datalist2 } from '../assets/data';
import Row from 'react-bootstrap/Row';


function IntroHeader() {
  return (
    <>
    <Container>
    <h1 className='text-center p-4 mb-4' style={{fontFamily : 'playfair display'}}>Who are we?</h1>
    <Row xs={3} md={2} className="g-4">
        <Col>
            {Datalist2.map((item) =>(
              <Card key={item.id} className='mb-4'>
                  <Card.Body>
                    <Card.Title style={{fontFamily : "Playfair Display"}}>{item.title}</Card.Title>
                       <Card.Text style={{fontFamily : " Hanken Grotesk"}}>{item.description}</Card.Text>
                  </Card.Body>
              </Card>
            ))}
    
        </Col>
        <Col>
          <Card style={{border : 'none'}}>
            <Card.Body className='text-center'>
              <img style={{width : '300px'}} src="https://plus.unsplash.com/premium_photo-1681131450325-f2060627bb2e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Card.Body>
          </Card>
          </Col>
        </Row>
    </Container>


   <div className='ViolenceStatistics'>
     <h1 className='text-center text-white p-4'>What Violence Has Costed Us So Far</h1>
     
   </div>
   </>
  );
}

export default IntroHeader;

