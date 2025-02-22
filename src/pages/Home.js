import React from "react";
import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap"


export default function Home(){
    return(
        <div className='d-flex flex-column' style={{minHeight: "100vh"}}>
            <Header/>
            <Container className='d-flex flex-grow-1 align-items-center'>
                <Content/>
            </Container>
            <Footer/>
      </div>
    );
};