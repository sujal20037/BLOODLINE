import FormComponent from "../components/formComponent";
import RegistrationBanner from "../assets/images/registration-page.jpg";
import FooterSection from "../components/footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CautionBanner from "../components/cautionBanner";

const RegistrationForm = () => {
  const navigate = useNavigate();
  function setLoginCookie(id,email,role) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // Cookie expires in 7 days
    document.cookie = `id=${id}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
    if(email && role) {
      document.cookie = `email=${email}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
      document.cookie = `role=${role}; expires=${expires.toUTCString()}; Secure; SameSite=Strict`;
    } 
}
  
  
  const registerApi = async (formData) => {
    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", formData);
      // Display success message or handle the response appropriately
      if(response.status === 201) {
        alert("Registration Successful");
        console.log("=========>",response);
        
        if(response.data.role === "requester") {
          localStorage.setItem('auth', JSON.stringify(response.data.role));
            // Call after successful login
            setLoginCookie(response.data.id,response.data.email,response.data.role);
          navigate("/requester-dashboard"); // Redirect to the home page
        }
        if(response.data.role === "donor") {
          localStorage.setItem('auth', JSON.stringify(response.data.role));
          setLoginCookie(response.data.role);
          navigate("/donor-dashboard"); // Redirect to the home page
        }
        // navigate("/login"); // Redirect to the login page
      }else{
        alert("Registration failed. Please try again.");
      }
      console.log("Registration Successful.\n user Id:", response.data);
      // clear the registration form data

      // Add your form submission logic here (e.g., send to the backend)
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  const handleFormSubmit = async(formData) => {
    await registerApi(formData);
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., send to the backend)
  };

  return (
    <>
      <CautionBanner />
      <div className="h-28"></div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-3 py-11">
        <div className="max-w-6xl w-full bg-white shadow-md rounded-md overflow-hidden flex">
          <div className=" items-center w-1/2 hidden lg:flex bg-cyan-100">
          <div >
          <img
              src={RegistrationBanner}
              alt="Registration Banner"
              className="object-cover w-full h-full p-10"
            />
          </div>
            
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              User Registration
            </h2>
            <FormComponent onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default RegistrationForm;
