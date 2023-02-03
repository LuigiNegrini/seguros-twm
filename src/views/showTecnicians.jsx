import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ShowTecnicians = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container>
                <h1>Técnicos</h1>
                <Table className="align-baseline" striped bordered hover>
                <thead>
                    <tr>
                    <th></th>
                    <th>Nome Completo</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Pedro Carlos</td>
                    <td>333333333-33</td>
                    <td>pedro@gmail.com</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>João Pereira</td>
                    <td>444444444-44</td>
                    <td>joao@gmail.com</td>
                    <td><Button variant="danger" className="button" type="submit">
                        Editar
                    </Button></td>                        
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Gabriel Souza</td>
                    <td>555555555-55</td>
                    <td>gabriel@gmail.com</td>
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
export default ShowTecnicians;