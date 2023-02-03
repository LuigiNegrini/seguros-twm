import React from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ServiceOrder = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container>
                <h1>Cadastro de Ordem de Serviços</h1>
                <Form>
                    <Form.Select aria-label="Default select example">
                        <option>Selecione o Cliente</option>
                        <option value="1">Jonatan Jacobs</option>
                        <option value="2">Lucas Vinícius</option>
                        <option value="3">Marcos da Silva</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label="Default select example">
                        <option>Selecione o Técnico</option>
                        <option value="1">Gabriel Souza</option>
                        <option value="2">João Pereira</option>
                        <option value="3">Pedro Carlos</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label="Default select example">
                        <option>Selecione o Tipo de Serviço</option>
                        <option value="2">Orçamento</option>
                        <option value="3">Sinistro</option>
                        <option value="1">Vistoria</option>
                    </Form.Select>
                    <br />
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <h4>Fotos</h4>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Control type="file" multiple />
                    </Form.Group>
                    <h4>Laudo</h4>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Control type="file" multiple />
                    </Form.Group>

                    <Button variant="danger" className='button' type="submit">
                        Salvar
                    </Button>
                </Form>
            </Container>
        </>
    );
};
export default ServiceOrder;