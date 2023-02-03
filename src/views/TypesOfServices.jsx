import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ServicesType = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container>
                <h1>Cadastro de Tipos de Serviços</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Tipo do Serviço" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Descrição" />
                    </Form.Group>
                    <h4>Quanto tempo demanda?</h4>
                    <div className="mb-3" key={'inline-radio'}>
                        <Form.Check inline type="radio" name='g2' label="Pouco"></Form.Check>
                        <Form.Check inline type="radio" name='g2' label="Médio"></Form.Check>
                        <Form.Check inline type="radio" name='g2' label="Alto"></Form.Check>
                    </div>
                    <Button variant="danger" className='button' type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    );
};
export default ServicesType;