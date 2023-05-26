import React, { Component } from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import img from '../assets/img/banner-img.png'
import icon1 from '../assets/img/1.png';
import icon2 from '../assets/img/2.png';
import icon3 from '../assets/img/3.png';
import icon4 from '../assets/img/4.png';

const Home = () => {
    return (
        <main className="banner">
          <Container>
            <Row className='align-items-center'>
              <Col xl={6}>
                <div className="banner-content">
                  <h1>Behold!</h1>
                  <p>The last BOBO bear inscribed on the bsc Networtk</p>
                  <span className='d-block'>ABSOLUTELY EPIC AND UNIQUE</span>
                  <a href="#/" className="site-btn bg-black">BUY NOW</a>
                  <ul>
                    <li><a href="/#"><img src={icon1} alt="" /></a></li>
                    <li><a href="/#"><img src={icon2} alt="" /></a></li>
                    <li><a href="/#"><img src={icon3} alt="" /></a></li>
                    <li><a href="/#"><img src={icon4} alt="" /></a></li>
                  </ul>
                </div>
              </Col>
              <Col xl={6}>
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
