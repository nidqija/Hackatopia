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
     <h1 className='text-center text-white p-5' style={{fontFamily : "Playfair Display"}}>What Violence Has Costed Us So Far</h1>
     <Container className='p-4' >
     <Row xs={3} md={4} className="g-4">
        <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>458,000</Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
              people were murdered worldwide in 2021—most were men.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>53%</Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
                increment of civilians who died in wars , from 2021 to 2022
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>   <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>81,000 </Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
              women were killed in 2020, most by partners or family members.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>   <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>1 in 8 women</Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
              were sexually assaulted before the age of 18.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
    </Row>
    </Container>
   </div>
   </>
  );
}

export default IntroHeader;

