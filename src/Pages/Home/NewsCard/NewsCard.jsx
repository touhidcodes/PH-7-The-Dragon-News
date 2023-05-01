import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

const NewsCard = ({ news }) => {
	const { _id, title, details, image_url, author, rating, total_view } = news;
	return (
		<div className='mb-5'>
			<Card className='d-flex items-center'>
				<Card.Header className='d-flex align-items-center'>
					<Image style={{ height: "40px" }} src={author?.img} roundedCircle />
					<div className='ps-3 flex-grow-1'>
						<p className='mb-0'>{author?.name}</p>
						<p className='mb-0'>
							<small>
								{moment(author?.published_date).format("YYYY-MM-DD")}
							</small>
						</p>
					</div>
					<div>
						<FaRegBookmark />
						<FaShareAlt />
					</div>
				</Card.Header>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Img variant='top' src={image_url} />
					<Card.Text>
						{details.length < 250 ? (
							<>{details}</>
						) : (
							<>
								{details.slice(0, 250)}...
								<Link
									to={`/news/${_id}`}
									className='text-decoration-none text-warning text-bold'
								>
									Read More
								</Link>
							</>
						)}
					</Card.Text>
				</Card.Body>
				<Card.Footer className='text-muted d-flex'>
					<div className='d-flex flex-grow-1'>
						<ReactStars
							count={rating.number}
							isHalf={true}
							activeColor={"#ffd700"}
						/>
						<span className='ps-1'>{rating.number}</span>
					</div>
					<div>
						<FaEye />
						<span className='ms-2 align-items-center'>{total_view}</span>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
};

export default NewsCard;
