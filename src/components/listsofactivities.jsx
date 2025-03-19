import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ListOfActivities({item}){
    return(
<Container>
    <Row xs={1} md={2} className="g-4">
        <Col className='md-4'>
          <Card className='mb-5 p-2'>
            <Card.Body>
              <Card.Title className='ActivityTitle'>{item.title}</Card.Title>
              <Card.Text className='ActivityDesc'>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='mb-5 p-2' id='InitiativeImage'>
          <Card.Img variant="top"  src={item.image} />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
    
    </Row>
    </Container>
  );
}



export default ListOfActivities;