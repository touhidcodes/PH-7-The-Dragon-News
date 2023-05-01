import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Catrgory/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/category/:id",
				element: <Category />,
			},
		],
	},
	{
		path: "/news",
		element: <NewsLayout />,
		children: [
			{
				path: "/:id",
				element: <News />,
			},
		],
	},
]);

export default router;
