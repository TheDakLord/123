import React from 'react';
import { Button, Container, FormControl, Nav, Navbar,Form} from 'react-bootstrap';
import logo from './logo192.png';
import {Outlet, Route, Routes} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';



function Header(props) {
    
    return (
        <>
        
            <Navbar   collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>
    
                    <img src={logo} height='30' width='30' className='d-inline-block align-top' alt='Logo'/>
                    React App
                    </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <LinkContainer to='/'>
                             <Nav.Link>Home</Nav.Link>
                             </LinkContainer>

                            <LinkContainer to='/about'>
                             <Nav.Link>About us</Nav.Link>
                             </LinkContainer>

                            <LinkContainer to='/contacts'>
                             <Nav.Link>Contacts</Nav.Link>
                             </LinkContainer>

                            <LinkContainer to='/blog'>
                             <Nav.Link>Blog</Nav.Link>
                             </LinkContainer>
                        </Nav> 
                        <Form className='d-flex' >
                            <FormControl
                            type='text'
                            placeholder='Search'
                            className='me-sm-2' />
                            <Button variant='outline-info'>Search</Button>
                           
                        </Form>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
            
                <Routes>
                    <Route path='/' element={<Home /> }/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contacts' element={<Contacts />}/>
                    <Route path='/blog' element={<Blog />}/>
                    </Routes>
                    
                    <Outlet/>
                    <p style={{color:'green',position:'absolute',right:'0',bottom:'0',padding:'30px',fontSize:'24px'}}>2023</p>
            
        </>
    );
}

export default Header;