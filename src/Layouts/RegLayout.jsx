import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const RegLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
};

export default RegLayout;
