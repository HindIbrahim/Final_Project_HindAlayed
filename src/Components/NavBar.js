import { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import { Link } from "react-router-dom"

class NavBar extends Component {


    render() {

        return (
            <>

                <Navbar id="NavBar" collapseOnSelect expand="lg" variant="dark" sticky="top">
                    <Link to="/Home">
                        <Navbar.Brand id="logo"></Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">


                            <Link className="NavTitle" to="/Home/Pages/Teachers">
                                <Nav.Link href="/#Techers">Teachers</Nav.Link>
                            </Link>

                            <Link className="NavTitle" to="/Home/Pages/Students">
                                <Nav.Link href="/#Students">Students</Nav.Link>
                            </Link>

                            <Link className="NavTitle" to="/Home/Pages/Courses">
                                <Nav.Link href="/#Courses">Courses</Nav.Link>
                            </Link>


                        </Nav>
                        <Nav>

                            <Link className="NavTitle" to="/Home/Pages/Channel">
                                <Nav.Link href="/#Channel">Our chaneel</Nav.Link>
                            </Link>



                            <Link className="NavTitle" to="/Home/LogOut">
                                <Nav.Link href="/#Courses">Log out</Nav.Link>
                            </Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}

export default NavBar;
