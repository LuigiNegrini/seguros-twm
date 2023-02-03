import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PeopleForm from "../components/PeopleForm";
import CustomNavbar from "../components/Navbar";

const Tecnicians = (props) => {
    return (
        <>
            <CustomNavbar />
            <Container></Container>
            <h1>Cadastro de Técnicos</h1>
            <PeopleForm />
        </>
    );
};
export default Tecnicians;