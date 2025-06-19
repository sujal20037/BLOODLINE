import Home from './pages/home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contact';
import "./App.css";
import RegistrationPage from './pages/registrationPage';
import LoginPage from './pages/loginPage';
import DonorDashboard from './pages/donorDashboard';
import RequesterDashboard from './pages/requesterDashboard';
import GuestRoute from './routes/guestsRoute';
import Founder from './pages/founder';
import AdminDashboard from './pages/adminDashboard';
import ManageUsers from './pages/manageUserPage';
import ManageRequests from './pages/manageRequestPage';
import ManageDonations from './pages/manageDonationPage';
import ManageBloodBanks from './pages/manageBloodBankPage';
import ManageTransactions from './pages/manageTransactionPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<GuestRoute>
							<Home />
						</GuestRoute>
					}
				/>
				<Route path="/founder" element={<Founder />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/register" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/donor-dashboard" element={<DonorDashboard />} />
				<Route
					path="/requester-dashboard"
					element={<RequesterDashboard />}
				/>
				<Route path="/admin-dashboard" element={<AdminDashboard />} />
				<Route path="/manage-users" element={<ManageUsers />} />
				<Route path="/manage-requests" element={<ManageRequests />} />
				<Route path="/manage-donations" element={<ManageDonations />} />
				<Route
					path="/manage-blood-banks"
					element={<ManageBloodBanks />}
				/>
				<Route path="/transactions" element={<ManageTransactions />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
