import React from "react";
import Home from "../Pages/Home/Home/Home";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Shared/leftNav/leftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import "./Root.css";

const Root = () => {
	return (
		<div className='layout'>
			<Home />
			<Container>
				<Row>
					<Col lg={3}>
						<LeftNav />
					</Col>
					<Col lg={6}>Main content coming soon ....</Col>
					<Col lg={3}>
						<RightNav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Root;
