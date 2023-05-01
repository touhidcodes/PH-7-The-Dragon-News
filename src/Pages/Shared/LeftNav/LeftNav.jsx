import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error(error));
	}, []);

	console.log(categories);
	return (
		<div>
			<h4>All Categories</h4>
			<div className='mt-3'>
				{categories?.map((item) => (
					<p key={item.id} className=''>
						<Link
							to={`/category/${item.name}`}
							className='text-decoration-none text-secondary ps-4'
						>
							{item.name}
						</Link>
					</p>
				))}
			</div>
		</div>
	);
};

export default LeftNav;
