import React, { Component } from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import img from '../assets/img/banner-img.png'

const Home = () => {
    return (
        <main className="banner">
          <Container>
            <Row className='align-items-center'>
              <Col md={6}>
                <div className="banner-content">
                  <h1>Behold!</h1>
                  <p>The last BOBO bear inscribed on the bsc Networtk</p>
                  <span className='d-block'>ABSOLUTELY EPIC AND UNIQUE</span>
                  <a href="#/" className="site-btn bg-black">BUY NOW</a>
                  <ul>
                    <li><a href="/#"></a></li>
                  </ul></div>
              </Col>
              <Col md={6}>
                <div className="banner-img">
                  <img src={img} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      )
}
export default Home;
