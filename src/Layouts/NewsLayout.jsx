import React from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Shared/leftNav/leftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import "./Root.css";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
	return (
		<div className='layout'>
			<Header />
			<Container>
				<Row>
					<Col lg={9}>
						<Outlet />
					</Col>
					<Col lg={3}>
						<RightNav />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default NewsLayout;
