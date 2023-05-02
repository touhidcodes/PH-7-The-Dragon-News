import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Catrgory/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import RegLayout from "../Layouts/RegLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Category />,
				loader: () => fetch("http://localhost:5000/news"),
			},
			{
				path: "/category/:id",
				element: <Category />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
		path: "news",
		element: <NewsLayout />,
		children: [
			{
				path: "/news/:id",
				element: <News />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
	{
		path: "/",
		element: <RegLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "registration",
				element: <Registration />,
			},
		],
	},
]);

export default router;
