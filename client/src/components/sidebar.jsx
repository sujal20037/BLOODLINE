import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Perform logout actions if needed
        document.cookie = "role=; email=; id=; name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        localStorage.removeItem("auth");
        navigate("/");
    }
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
          Blood Line Admin
        </h2>
        {/* Navigation */}
        <nav className="mt-4">
          <ul>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-500" : ""}`}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/manage-users"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-600 " : ""}`}
              >
                Manage Users
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/manage-requests"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-600" : ""}`}
              >
                Manage Blood Requests
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/manage-donations"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-600" : ""}`}
              >
                Manage Donations
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/manage-blood-banks"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-600" : ""}`}
              >
                Manage Blood Banks
              </NavLink>
            </li>
            <li className="p-4 hover:bg-gray-700">
              <NavLink
                to="/transactions"
                className={({ isActive }) => `${isActive ? "text-2xl text-red-600" : ""}`}
              >
                Transactions
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition w-full"
            onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
