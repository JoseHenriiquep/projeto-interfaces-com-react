import { Container, Row, Col } from 'reactstrap'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles.css';

const Footer = () => {

    return(
        <>
            <Container fluid className='footer'>
                <Row className='justify-content-between align-items-center' >
                    <Col>
                        <Link to="https://github.com/JoseHenriiquep"><FaGithub className='icons'/></Link>
                    </Col>
                    <Col>
                        <Link to="https://www.linkedin.com/in/josehenriiquep/"><FaLinkedin className='icons'/></Link>
                    </Col>
                    <Col>
                        <Link to="https://www.instagram.com/josehenriiqueep/"><FaInstagram className='icons'/></Link>
                    </Col>
                </Row>
                <Row style={{marginTop: "5px"}}>
                    <Col>
                        <p>MIT Full Stack 2025</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default Footer;