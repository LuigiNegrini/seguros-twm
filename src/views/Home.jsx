import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";
import Logo from "../images/logo.png";

const Home = (props) => {
    return (
        <>
            <CustomNavbar />
            <img src={Logo}></img>
        </>
    );
};
export default Home;