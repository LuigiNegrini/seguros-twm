import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function CustomNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar' variant="dark">
            <Container>
                <Navbar.Brand href="/" className='titulo'>Sistema de Gerenciamento</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Button variant="danger" className='button entreBotao'>
                            <NavDropdown title="Visualizar" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/showproducts">Produtos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/showclients">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/showtecnicians">Técnicos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/showservices-type">Tipos de Serviço</NavDropdown.Item>
                                <NavDropdown.Item href="/showservices-order">Ordem de Serviço</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                        <Button variant="danger" className='button'>
                            <NavDropdown title="Adicionar" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/products">Produtos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/clients">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/tecnicians">Técnicos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/services-type">Tipos de Serviço</NavDropdown.Item>
                                <NavDropdown.Item href="/services-order">Ordem de Serviço</NavDropdown.Item>
                            </NavDropdown>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;