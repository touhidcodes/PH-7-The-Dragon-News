import React from "react";
import logo from "../../../../src/assets/img/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className='text-center'>
				<img src={logo} alt='' className='mt-5' />
				<h5 className='mt-3 text-secondary'>
					Journalism Without Fear or Favour
				</h5>
				<h5 className='mt-3 '>{moment().format("LLLL")}</h5>
			</div>
			<div className='d-flex bg-light p-3 rounded '>
				<Button variant='danger'>Latest</Button>
				<Marquee speed={80} className='text-danger'>
					<h5>
						Match Highlights: Germany vs Spain — as it happened ! Match
						Highlights: Germany vs Spain as...
					</h5>
				</Marquee>
			</div>
			<div>
				<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
					<Container>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='mx-auto'>
								<Nav.Link href='#features'>
									<Link to='/' className='text-decoration-none'>
										Home
									</Link>
								</Nav.Link>
								<Nav.Link href='#pricing'>About</Nav.Link>
								<Nav.Link href='#pricing'>Career</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href='#deets'>Profile</Nav.Link>
								<Button variant='secondary'>Log In</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
