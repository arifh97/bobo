import React, { useState } from 'react'
import logo from '../assets/img/logo.png'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function Header() {    
    const xPath = <path fillRule="evenodd" clipRule="evenodd" d="M8.51569 10.121L13.8187 15.425C14.1001 15.7064 14.4817 15.8645 14.8797 15.8645C15.2776 15.8645 15.6593 15.7064 15.9407 15.425C16.2221 15.1436 16.3802 14.7619 16.3802 14.364C16.3802 13.966 16.2221 13.5844 15.9407 13.303L10.6357 7.99999L15.9397 2.69699C16.079 2.55766 16.1894 2.39226 16.2648 2.21024C16.3401 2.02821 16.3789 1.83313 16.3788 1.63613C16.3788 1.43914 16.3399 1.24407 16.2645 1.06209C16.1891 0.880101 16.0785 0.714755 15.9392 0.575488C15.7999 0.436221 15.6345 0.325762 15.4524 0.250416C15.2704 0.175071 15.0753 0.136315 14.8783 0.136361C14.6813 0.136408 14.4863 0.175255 14.3043 0.250687C14.1223 0.326118 13.957 0.436656 13.8177 0.575988L8.51569 5.87899L3.21269 0.575988C3.07438 0.432659 2.90892 0.318309 2.72595 0.239611C2.54298 0.160912 2.34617 0.119441 2.14701 0.117617C1.94784 0.115793 1.7503 0.153652 1.56592 0.228987C1.38154 0.304321 1.21402 0.415622 1.07311 0.556394C0.932205 0.697166 0.820747 0.864591 0.745239 1.0489C0.669731 1.23321 0.631685 1.43071 0.633321 1.62988C0.634957 1.82905 0.676242 2.02589 0.754768 2.20894C0.833294 2.39198 0.947488 2.55755 1.09069 2.69599L6.39569 7.99999L1.09169 13.303C0.810293 13.5844 0.652206 13.966 0.652206 14.364C0.652206 14.7619 0.810293 15.1436 1.09169 15.425C1.37308 15.7064 1.75473 15.8645 2.15269 15.8645C2.55064 15.8645 2.93229 15.7064 3.21369 15.425L8.51569 10.12V10.121Z" fill="white"/>;
    const dotPath = <path d="M1.64069 1.125H17.3907M1.64069 6H17.3907M1.64069 10.875H17.3907" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>;
    const [isNavVisible, setNavVisibility] = useState(false);
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    }
    return (
        <header className='heading'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={3} className='d-flex align-items-center'>
                        <div className="heading-logo">
                            <img src={logo} alt="" />
                        </div>
                        <Button onClick={toggleNav} className='bg-transparent border-0 p-0 ms-auto d-md-none'>
                            <svg width="24" height="24" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {isNavVisible ? xPath : dotPath}
                            </svg>
                        </Button>
                    </Col>
                    <Col md={6} className={`text-center heading-mobileMenu ${isNavVisible ? 'show' : ''}`}>
                        <div className="heading-menu text-center">
                            <ul>
                                <li><NavLink to='/'>HOME</NavLink></li>
                                <li><NavLink to="/nfts" >NFTS</NavLink></li>
                                <li><NavLink to="/ordinals">ORDINALS</NavLink></li>
                                <li className="d-md-none"><a href="/#" className="site-btn">BUY BOBO</a></li>
                            </ul>
                        </div>
                    </Col>                    
                    <Col md={3} className='text-end d-none d-md-block'>
                        <div className="heading-action text-right">
                            <a href="/#" className="site-btn" target='_blank'>BUY BOBO</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
