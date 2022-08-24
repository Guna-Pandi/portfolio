import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



function NavBar() {
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,seScrolled]=useState(false);

    useEffect(() => {
        const onScroll = ()=> {
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return ()=> window.removeEventListener("scroll",onscroll);

    },[])

    const onUpdateActiveLink= (value) => {
        setActiveLink(value);
    }

  return (
    

<Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt ="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span classname="navbar-toggler-icon"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link ': 'navbar-link'}  onClick ={() => onUpdateActiveLink('home')}>Home </Nav.Link>
            <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link ': 'navbar-link'} onClick ={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project"  className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick ={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon1} alt=""/></a>
                <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon2} alt=""/></a>
                <a href="https://instagram.com/guna3473?igshid=YmMyMTA2M2Y="><img src={navIcon3} alt=""/></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavBar
