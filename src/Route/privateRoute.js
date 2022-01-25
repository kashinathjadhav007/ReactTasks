 import { Navigate } from "react-router-dom";
 export function PrivateRoute({ children }) {
    
    let token = localStorage.getItem('token');
    console.log("hello")
    return token ? children : <Navigate to="/loginpage" />;
    
  }

  