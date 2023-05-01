import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
	const newsData = useLoaderData();
	const { title, image_url, details, category_id } = newsData;
	return (
		<div>
			<Card>
				<Card.Img variant='top' src={image_url} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{details}</Card.Text>
					<Button variant='danger'>
						<Link
							to={`/category/${category_id}`}
							className='text-decoration-none text-white d-flex align-items-center'
						>
							<FaArrowRight className='me-2' />
							All News In This Category
						</Link>
					</Button>
				</Card.Body>
			</Card>
			<EditorsInsights />
		</div>
	);
};

export default News;
