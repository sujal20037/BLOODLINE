import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === name) {
        return value;
      }
    }
    return null; // Return null if the cookie is not found
  }
  
  // Example
  if(getCookie('role') === "donor"){
    return <Navigate to="/donor-dashboard" replace />;
  }else if(getCookie('role') === "requester"){
    return <Navigate to="/requester-dashboard" replace />;
  }else{
    return children;
  }

};

export default GuestRoute;