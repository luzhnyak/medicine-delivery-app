import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartForm = () => {
  return (
    <section className="border p-3">
      <Form>
        <Row>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>
          </Col>
          <Col className="mb-3">Card</Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default CartForm;
