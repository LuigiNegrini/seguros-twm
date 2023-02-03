import React from "react";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ShowServiceOrder = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container>
                <h1>Ordem de Serviços</h1>
                <Table className="align-baseline" striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Cliente</th>
                    <th>Técnico</th>
                    <th>Serviço</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Marcos da Silva</td>
                    <td>Pedro Carlos</td>
                    <td>Vistoria</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jonatan Jacobs</td>
                    <td>João Pereira</td>
                    <td>Sinistro</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>                        
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Lucas Vinícius</td>
                    <td>Gabriel Souza</td>
                    <td>Orçamento</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>                        
                    </tr>
                </tbody>
                </Table>
            </Container>
        </>
    );
};
export default ShowServiceOrder;