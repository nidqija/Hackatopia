import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function NextPage({ item }) {
    return (
        <Container className='p-4'>
            <Row xs={2} md={2} className="g-4">
                <Col>
                    <Card className='InitiativesTeaserCard p-4 mt-5'>
                        <Card.Body className='p-4 m-4'>
                            <Card.Title className='InitiativesTeaserCardTitle mb-4'>{item.title}</Card.Title>
                            <Card.Text className='InitiativesTeaserCardDesc'>
                                {item.description}
                            </Card.Text>
                            <Link to={item.routepage} className='InitiativesTeaserButton p-2'>
                                Proceed to next page
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='InitiativesTeaserCard p-4 mt-5'>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default NextPage;
