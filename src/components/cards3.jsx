import { Container, Row, Col, Card } from "react-bootstrap";

function Card3({ item }) {
    return (
        <Container className="p-5">
            <Row xs={1} md={2} className="g-4">
                <Col md={6}>
                    <Card className="mb-5 p-2" id="JoinUsCards">
                        <Card.Body>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61678.39263619224!2d101.61087514863279!3d2.928808000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4854fbf3bbdd%3A0x39fc48a7a19d8485!2sUNICEF%20Malaysia!5e1!3m2!1sen!2smy!4v1742664264811!5m2!1sen!2smy"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-5 p-2" id="JoinUsCards">
                        <Card.Body>
                            <Card.Title className="JoinUsTitle">
                               {item.title}
                            </Card.Title>
                            <Card.Text className="JoinUsDesc">
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Card3;
