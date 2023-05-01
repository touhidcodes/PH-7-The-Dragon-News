import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
	const { id } = useParams();
	// console.log(id);
	const categoryNews = useLoaderData();
	// console.log(categoryNews);
	return (
		<div>
			This is categories {categoryNews.length}
			{categoryNews.map((news) => (
				<NewsCard key={news._id} news={news}></NewsCard>
			))}
		</div>
	);
};

export default Category;
