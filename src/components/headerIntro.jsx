import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Datalist2 } from '../assets/data';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

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
          <h1 className='StatisticsBodySource p-3'>based on United Nations Office on Drugs and Crimes</h1>
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
          <h1 className='StatisticsBodySource p-3'>based on United Nations</h1>
        </Col>   <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>81,000 </Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
              women were killed in 2020, most by partners or family members.
              </Card.Text>
            </Card.Body>
          </Card>
          <h1 className='StatisticsBodySource p-3'>based on United Nations Women</h1>
        </Col>   <Col>
          <Card className='text-center'>
            <Card.Body className='StatisticsBody'>
              <Card.Title className='StatisticsBodyHeader'>1 in 8 women</Card.Title>
              <Card.Text className='StatisticsBodyDesc'>
              were sexually assaulted before the age of 18.
              </Card.Text>
            </Card.Body>
          </Card>
          <h1 className='StatisticsBodySource p-3'>based on AP News</h1>
        </Col>
        
    </Row>
    </Container>
   </div>

     <div className='WhatWeCanDo'>
      <Container className='p-4'>
      <Row xs={2} md={2} className="g-4">
        <Col >
          <Card className='InitiativesTeaserCard p-4 mt-5'>
            <Card.Body className='p-4 m-4'>
              <Card.Title className='InitiativesTeaserCardTitle mb-4'>See our Initiatives</Card.Title>
              <Card.Text className='InitiativesTeaserCardDesc'>
              Check out our initiatives from time to time as we actively campaign for positive change through awareness programs, community outreach, and advocacy efforts. From organizing educational workshops to launching social media movements, we strive to raise awareness and drive meaningful action toward a safer and more just society.
              </Card.Text>
              <Link to="/initiatives" className='InitiativesTeaserButton p-2' >Proceed to next page</Link>

            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className='InitiativesTeaserCard p-4 mt-5'>
            <Card.Img variant="top" src="https://s3.eu-west-2.amazonaws.com/wagggs.prod/images/malayisa_group_training.2e16d0ba.fill-640x360-c50.jpg" />
            <Card.Body>
           
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

