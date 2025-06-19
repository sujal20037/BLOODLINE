import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LoginBanner from "../assets/images/login-page.jpg";
import FooterSection from "../components/footer";
import axios from "axios";
import CautionBanner from "../components/cautionBanner";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    role: "donor",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };
  function setLoginCookie(id,email,role,name) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // Cookie expires in 7 days
    document.cookie = `id=${id}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
    document.cookie = `email=${email}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
    document.cookie = `role=${role}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
    document.cookie = `name=${name}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
}

  const registerApi = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
      if (response.status === 200) {
        alert("Login Successful");
        console.log();
        
        if(response.data.role === "requester"){
          console.log("=========>",response.data);
          
          localStorage.setItem('auth', JSON.stringify(response.data.role));
          setLoginCookie(response.data.user_id,response.data.email,response.data.role,response.data.name);
          navigate("/requester-dashboard"); // Redirect to the home page
        }else if(response.data.role === "donor") {
          localStorage.setItem('auth', JSON.stringify(response.data.role));
          setLoginCookie(response.data.user_id,response.data.email,response.data.role,response.data.name);
          navigate("/donor-dashboard"); // Redirect to the home page
        }else if(response.data.role === "admin") {
          localStorage.setItem('auth', JSON.stringify(response.data.role));
          setLoginCookie(response.data.user_id,response.data.email,response.data.role,response.data.name);
          navigate("/admin-dashboard"); // Redirect to the home page
      }
      console.log("Login Successful.", response.data);
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerApi(formData);
    console.log("Login Data Submitted:", formData);
  };

  return (
    <>
      {/* <div className="fixed max-h-5 top-0 right-0 z-10">
        <div className="flex items-center w-full bg-red-500 py-0">
          <div className="bg-black text-white text-sm font-semibold px-4 py-3.5 flex-shrink-0">
            Caution:
          </div>
          <div className="flex-1">
            <marquee className="text-2xl text-white bg-red-500 py-0 font-semibold">
              We never charge for blood donations. Don&apos;t pay for blood;
              it&apos;s a selfless act. Save lives without cost. If anyone asks
              for money to donate blood, please do not encourage it.
            </marquee>
          </div>
        </div>
        <Header />
      </div> */}
      <CautionBanner />
      <div className="h-10"></div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-md overflow-hidden flex">
          <div className="w-1/2 hidden lg:block">
            <img
              src={LoginBanner}
              alt="Login Banner"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              Login
            </h2>
            {/* Role Selection Buttons */}
            <div className="flex justify-center gap-4 mb-6">
              <button
                className={`py-2 px-4 rounded-md font-semibold ${
                  formData.role === "donor"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleRoleSelect("donor")}
              >
                Donor
              </button>
              <button
                className={`py-2 px-4 rounded-md font-semibold ${
                  formData.role === "requester"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleRoleSelect("requester")}
              >
                Requester
              </button>
              <button
                className={`py-2 px-4 rounded-md font-semibold ${
                  formData.role === "admin"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleRoleSelect("admin")}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
              >
                Login
              </button>
            </form>

            {/* Register Redirect */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <a
                  href="/register"
                  className="text-red-500 hover:underline font-semibold"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default LoginPage;
