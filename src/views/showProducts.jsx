import React from "react";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import axios from "axios";

class ShowProducts extends React.Component {

    render() {
        return (
            <>
                <CustomNavbar />
                <Container>
                    <h1>Produtos</h1>
                    <Table className="align-baseline" striped bordered hover>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Produto 1</td>
                        <td>111,11</td>
                        <td><Button variant="danger" className="button" type="submit">
                            Editar
                        </Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Produto 2</td>
                        <td>222,22</td>
                        <td><Button variant="danger" className="button" type="submit">
                            Editar
                        </Button></td>                        
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Produto 3</td>
                        <td>333,33</td>
                        <td><Button variant="danger" className="button" type="submit">
                            Editar
                        </Button></td>                        
                        </tr>
                    </tbody>
                    </Table>
                </Container>
            </>
        )
    }

};
export default ShowProducts;