import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap"
import ContentSobre from "../components/ContentSobre";

export default function Sobre(){
    return(
        <div className='d-flex flex-column' style={{minHeight: "100vh"}}>
            <Header/>
            <Container className='d-flex flex-grow-1 align-items-center'>
                <ContentSobre />
            </Container>
            <Footer/>
      </div>
    );
};