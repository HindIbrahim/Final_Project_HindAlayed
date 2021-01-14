import { Component } from "react";
import { Navbar } from 'react-bootstrap';
class Header extends Component {


    render() {

        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <Navbar id="Header" variant="dark" >
                    <Navbar.Brand href="/#Home">

                        <p class="animate__animated animate__pulse" id="HeaderTitle">GA SCHOOL</p>
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default Header;
