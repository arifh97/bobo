import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import title from '../assets/img/title.png';
import img from '../assets/img/banner-img-2.png';
const Nfts = () => {
    return (
        <main className='nft'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8} className='text-center'>
                        <img src={title} alt="" />
                        <img src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
export default Nfts;