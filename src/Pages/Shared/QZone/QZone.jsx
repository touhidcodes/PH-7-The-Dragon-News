import React from "react";
import QZone1 from "../../../../src/assets/img/qZone1.png";
import QZone2 from "../../../../src/assets/img/qZone2.png";
import QZone3 from "../../../../src/assets/img/qZone3.png";

const QZone = () => {
	return (
		<div className="mt-3">
			<h4 className="mt-2">QZone</h4>
			<div className='bg-secondary text-center rounded pt-4 pb-4'>
				<img src={QZone1} alt='' />
				<img src={QZone2} alt='' />
				<img src={QZone3} alt='' />
			</div>
		</div>
	);
};

export default QZone;
