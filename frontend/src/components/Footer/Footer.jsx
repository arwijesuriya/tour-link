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
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer
