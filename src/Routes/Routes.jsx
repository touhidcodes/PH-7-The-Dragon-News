import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Catrgory/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import RegLayout from "../Layouts/RegLayout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RegLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to='category/0' />,
			},
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
	{
		path: "category",
		element: <Root />,
		children: [
			{
				path: ":id",
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
				path: ":id",
				element: (
					<PrivateRoutes>
						<News />
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);

export default router;
