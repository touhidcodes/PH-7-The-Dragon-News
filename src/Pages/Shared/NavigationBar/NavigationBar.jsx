import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut();
	};

	return (
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
							<Nav.Link href='#features'>
								<Link to='/about' className='text-decoration-none'>
									About
								</Link>
							</Nav.Link>
							<Nav.Link href='#features'>
								<Link to='/career' className='text-decoration-none'>
									Career
								</Link>
							</Nav.Link>
						</Nav>
						<Nav>
							{user ? (
								<div className='d-flex'>
									<Nav.Link href='#'>
										<FaUserCircle style={{ height: "20px" }} />
									</Nav.Link>
									<Button variant='secondary' onClick={handleLogOut}>
										Log Out
									</Button>
								</div>
							) : (
								<Button variant='secondary'>
									<Link
										to='/login'
										className='text-decoration-none text-white'
										onClick={handleLogOut}
									>
										Log In
									</Link>
								</Button>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;
