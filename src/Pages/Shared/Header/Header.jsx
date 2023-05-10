import React from "react";
import logo from "../../../../src/assets/img/logo.png";
import moment from "moment";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import NavigationBar from "../NavigationBar/NavigationBar";

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
				<Marquee speed={70} className='text-danger'>
					<h5>
						Match Highlights: Germany vs Spain — as it happened ! Match
						Highlights: Germany vs Spain as...
					</h5>
				</Marquee>
			</div>
			<NavigationBar />
		</div>
	);
};

export default Header;
