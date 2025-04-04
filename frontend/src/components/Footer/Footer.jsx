import React from 'react'
import "./footer.css"

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.png";

const quick__links = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
]

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Traveling opens the door to creating memories
              </p>

              <div className="social__links">
                <span>
                  <Link to="#">
                    <i class="ri-youtube-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i class="ri-facebook-box-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i class="ri-linkedin-box-fill"></i>
                  </Link>
                </span>

                <span>
                  <Link to="#">
                    <i class="ri-github-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>
                  123, Colombo, Sri Lanka
                </p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Mail to:
                </h6>
                <p className='mb-0'>
                  abc@example.com
                </p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Tel:
                </h6>
                <p className='mb-0'>
                  0112345678
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
              <p className="copyright">
                &copy; {year} TourLink. All rights reserved.
              </p>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer
