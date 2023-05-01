import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/img/1.png";
import second from "../../../assets/img/2.png";
import third from "../../../assets/img/3.png";

const Cards = () => {
	return (
		<div className='mt-4'>
			<h4>Editors Insights</h4>
			<Row xs={1} md={1} lg={1} className='g-1 mt-2'>
				<Col>
					<Card>
						<Card.Img variant='top' src={first} />
						<Card.Body>
							<Card.Title>
								21 The Most Stylish Wedding Guest Dresses For Spring
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant='top' src={second} />
						<Card.Body>
							<Card.Title>
								21 The Most Stylish Wedding Guest Dresses For Spring
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Img variant='top' src={third} />
						<Card.Body>
							<Card.Title>
								21 The Most Stylish Wedding Guest Dresses For Spring
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Cards;
