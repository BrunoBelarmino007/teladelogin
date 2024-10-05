import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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
            <Form className="login-form">
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Email ou telefone" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3" disabled>
                Entrar
              </Button>
              <div className="mt-3">
                <a href="./telaprincipal/telaprincipal.component.html" className="text-decoration-none">
                  Esqueceu a senha?
                </a>
              </div>
              <hr className="mt-4" />
              <Button variant="success" type="button" className="mt-3">
                Criar nova conta
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Login;
