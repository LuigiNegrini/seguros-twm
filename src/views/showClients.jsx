import React from "react";
import { Container } from "react-bootstrap";
import CustomNavbar from "../components/Navbar";
import ShowClients from "../components/ShowClients";

class ShowClient extends React.Component {

    render() {
        return (
            <>
                <CustomNavbar />
                <Container>
                    <ShowClients />
                </Container>
            </>
        )
    };
}

export default ShowClient;