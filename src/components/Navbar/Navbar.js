import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap';
import heroLogo from './heroLogo.png'; // with import
import "./Navbar.css";

function NavbarComp() {
    return (
        <div>
            <Navbar className='navbar1' collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="#Home"><img className='siteLogo' src={heroLogo} alt='hero'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='navBarOption' href="#Home">Home</Nav.Link>
                            <Nav.Link className='navBarOption' href="#AboutUs">About Us</Nav.Link>
                            <NavDropdown className='navBarOption' title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item className='dropDownNavOption' href="#action/3.1">Shirts</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' href="#action/3.1">Comics</NavDropdown.Item>
                                <NavDropdown.Item className='dropDownNavOption' href="#action/3.1">Figures</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navBarOption' href="#MyProfile">My Profile</Nav.Link>
                            <Nav.Link className='navBarOption' href="#ContactUs">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className='profileCartDiv'>
                        <div>
                            <img className='profileIconAndCart' src='https://cdn.icon-icons.com/icons2/1904/PNG/512/profile_121261.png' alt="MyProfile"></img>
                        </div>
                        <div>
                            <img className='profileIconAndCart' src='https://icon-library.com/images/19653-200_62660.png' alt="Favorites"></img>
                        </div>
                        <div>
                            <img className='profileIconAndCart' src='https://cdn-icons-png.flaticon.com/512/1413/1413908.png' alt="Cart"></img>
                        </div>

                    </div>
                </Container>
            </Navbar>
            <Form className="d-flex serachDiv">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className='searchBar'
                />
                <button className='btns'>Search</button>
            </Form>

        </div>
    );
}

export default NavbarComp;