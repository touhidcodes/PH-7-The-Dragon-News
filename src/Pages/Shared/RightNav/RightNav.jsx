import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
	FaGoogle,
	FaGithub,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/img/bg.png";

const RightNav = () => {
	return (
		<div>
			<div>
				<h4>Log In with</h4>
				<Button variant='outline-primary' className='mb-2'>
					<FaGoogle /> Log in with Google
				</Button>
				<Button variant='outline-secondary'>
					<FaGithub /> Log in with Github
				</Button>
			</div>
			<div className='mt-3'>
				<h4>Find Us On</h4>
				<div>
					<ListGroup>
						<ListGroup.Item>
							<FaFacebookF />
							<span className='ms-3'>Facebook</span>
						</ListGroup.Item>
						<ListGroup.Item>
							<FaTwitter />
							<span className='ms-3'>Twitter</span>
						</ListGroup.Item>
						<ListGroup.Item>
							<FaInstagram />
							<span className='ms-3'>Instagram</span>
						</ListGroup.Item>
					</ListGroup>
				</div>
			</div>
			<QZone />
			<div className='mt-5'>
				<img src={bg} alt='' />
			</div>
		</div>
	);
};

export default RightNav;
