import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
	const { id } = useParams();
	return <div>This is categories</div>;
};

export default Category;
