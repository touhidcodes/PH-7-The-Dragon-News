import React from "react";
import logo from "../../../../src/assets/img/logo.png";
import moment from "moment";

const Header = () => {
	return (
		<div className='text-center'>
			<img src={logo} alt='' className='mt-5' />
			<h5 className='mt-3 text-secondary'>Journalism Without Fear or Favour</h5>
			<h5 className='mt-3 '>{moment().format("LLLL")}</h5>
		</div>
	);
};

export default Header;
