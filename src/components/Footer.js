import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm  from "../components/MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import uparrow from "../assets/img/up-arrow.png";


/*
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
*/
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <MailchimpForm />
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon1} alt="Icon" /></a>
            <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon2} alt="Icon" /></a>
            <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt="Icon" /></a>
            
          </div>
          <div className="social-icon1">
          <a href="#"><img src={uparrow} alt="Icon" /></a>
          </div>
          <p>Copyright 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer;
