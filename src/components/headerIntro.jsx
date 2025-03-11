import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Datalist2 } from '../assets/data';
import Row from 'react-bootstrap/Row';


function IntroHeader() {
  return (
    <Container>
    <h1 className='text-center p-4' style={{fontFamily : 'playfair display'}}>Who are we?</h1>
    <Row xs={3} md={3} className="g-4">
    {Array.from({ length: 3 }).map((idx) => (
        <Col>
            {Datalist2.map((item) =>(
              <Card key={item.id}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                       <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
              </Card>
            ))}
    
        </Col>
              ))}

        </Row>
    </Container>
  );
}

export default IntroHeader;

