// src/pages/AdminDashboard.jsx
import React from "react";
import Sidebar from "../components/sidebar";
import DashboardCard from "../components/dashboardCard";
import Chart from "../components/chart";

const AdminDashboard = () => {
	const getCookieValue = (name) => {
		const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
		return match ? decodeURIComponent(match[2]) : "";
	};
	const adminName = getCookieValue("name");
	return (
		<div className="grid grid-cols-[1fr_10fr]">
			{/* Sidebar */}
			<div className="hidden sm:block fixed">
				<Sidebar />
			</div>
			{/* Main Content */}
			<div className="ml-72 w-full p-8 pt-2 pb-7">
				<div className="flex justify-between items-center">
					<h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
					<h1 className="text-3xl font-bold mb-6">
						Welcome{" "}
						{adminName ? (
							<span>{adminName}</span>
						) : (
							<span>Admin</span>
						)}
					</h1>
				</div>
				<h2 className="text-2xl font-bold mb-4">Overview</h2>
				<div className="grid grid-cols-4 gap-6">
					<DashboardCard title="Total Users" count="500" />
					<DashboardCard title="Blood Requests" count="120" />
					<DashboardCard title="Donations" count="80" />
					<DashboardCard title="Revenue (₹)" count="40,000" />
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4">Analytics</h2>
					<Chart />
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
