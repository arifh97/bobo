import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className='align-items-center'>
                    <Col sm={6}>
                        <p>© 2023 BOBO THE BEAR</p>
                    </Col>
                    <Col sm={6} className='text-end'>
                        <a href="/#" className='text-uppercase text-white'>privacy policy</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
