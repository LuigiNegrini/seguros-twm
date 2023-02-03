import React from "react";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";

const ShowServicesType = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container>
                <h1>Tipos de Serviços</h1>
                <Table className="align-baseline" striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Tipo do Serviço</th>
                    <th>Tempo demandado</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Sinistro</td>
                    <td>Alto</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Vistoria</td>
                    <td>Pouco</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>                        
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Orçamento</td>
                    <td>Médio</td>
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
export default ShowServicesType;