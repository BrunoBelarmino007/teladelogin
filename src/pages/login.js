import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <main>
      <Container className="mt-5">
        <Row>
          <Col md={6} className="text-center">
            <h1>PET+</h1>
            <p>O PET Plus auxilia na administração e organização do seu petshop de maneira moderna e aprimorada.</p>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
