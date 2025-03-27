import { Container, Row, Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { supabase } from "../createClient";
import { useState, useEffect } from "react";

function UserInfo() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", email: "" });

  console.log(user);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      return;
    }
    if (data) {
      setUsers(data);
    }
  }

  function HandleChange(event) {
    const { name, value } = event.target;
    setUser((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function createUser(event) {
    event.preventDefault(); // Prevents page reload
    const { error } = await supabase.from("users").insert({
      username: user.username,
      email: user.email,
    });

    if (error) {
      alert("Error submitting user data");
      console.error(error);
    } else {
      handleSend(); // Send notification on success
    }
  }

  function handleSend() {
    if (!("Notification" in window)) {
      alert("Submission failed, please try again");
      return;
    }

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("Successful!");
        notification.onclick = () => {
          window.open("about:blank");
        };
      }
    });
  }

  return (
    <div className="InputForm">
      <Container className="p-5">
        <h1 style={{ fontFamily: "Playfair Display" }}>
          Be part of our community!
        </h1>
        <h6 className="mb-5 mt-3" style={{ fontFamily: "Hanken Grotesk" }}>
          We are currently having 100k+ members and counting!
        </h6>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <Container>
              <Card className="p-5">
                <Form onSubmit={createUser}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={HandleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={HandleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Send me a notification" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card>
            </Container>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
              <img
                src="https://t4.ftcdn.net/jpg/00/32/06/91/360_F_32069160_96JpOLqNYK15MBN3UPlXBpZjuj3HyGqx.jpg"
                alt=""
              />
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserInfo;
