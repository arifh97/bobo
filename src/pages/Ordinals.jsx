import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import img from '../assets/img/banner-img.png'

const Ordinals = () =>  {
    return (
        <main className="ordinals mt-4 mt-md-5">
          <Container>
            <Row className='justify-content-center'>
              <Col lg={8} className='text-center'>
                <h4 className="text-uppercase">BEHOLD, THE FIRST BOBO BEAR INSCRIBED ON THE BTC NETWORK.</h4>
                <img src={img} alt="" />
              </Col>
            </Row>
          </Container>
        </main>
      )
}
export default Ordinals;