import { Container, Row, Col, Card } from "react-bootstrap";



function Card2({ item }) {

 

    return (
        <>
        <Container>
            
            <Row xs={1} md={2} className="g-4">
            <Col  md={6}>
                <Card className="mb-5 p-2" id="JoinUsCards">
                <img src={item.image} style={{borderRadius : "20px"}} alt="" />

                        <Card.Body>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-5 p-2" id="JoinUsCards">
                        <Card.Body>
                            <Card.Title className="JoinUsTitle"><span id="JoinUsIcons">{item.icons}</span> {item.title}</Card.Title>
                            <Card.Text className="JoinUsDesc">
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
           
            </Row>
        </Container>

       
        </>
    );
}

export default Card2;
