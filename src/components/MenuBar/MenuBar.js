import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = () => {
    return (
        <div >
            <Navbar bg="dark" variant="dark" style={{height:"50px"}}>
                <Nav className="ms-auto px-5">
                    <Nav.Link href="#features"> <button style={{ backgroundColor:"#93227F"}} className="btn btn-rounded text-white btn-sm">Login</button> </Nav.Link>
                    <Nav.Link href="#pricing" className="text-white"> <p>Sign Up</p> </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default MenuBar;