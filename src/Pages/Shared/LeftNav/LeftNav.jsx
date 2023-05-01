import React, { useEffect, useState } from "react";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => console.error(error));
	}, []);

	console.log(categories);
	return <div>Left Nav</div>;
};

export default LeftNav;
